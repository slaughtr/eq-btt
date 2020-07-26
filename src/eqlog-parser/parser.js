const { Tail } = require('tail')
const { config } = require('../../config')
// TODO: array support
const tail = new Tail(config.logFile)

const { sendToBTT } = require('../btt-messenger/messenger')
const { dpsEvents } = require('./dps-events')

// for tracking things like HP etc
const current = {
    HP_CURR: null,
    HP_MAX: null,
    HP_REGEN: null,
    IS_HP_TICKING: false,
    MANA_CURR: null,
    MANA_MAX: null,
    MANA_REGEN: null,
    IS_MANA_TICKING: false,
    IN_COMBAT: false,
    HP_REGEN: 1,
    PLAYER_NAME: config.logFile.split('_')[1]
}

setInterval(() => {
    // console.log('Tick')
    /* 
    HP TICK  
    This is pretty tricky, because of sit/stand etc
    Seems to track fairly well...might work slightly better to 
    take a sitting and standing regen rate and average, then do floor()
    to report an int but that seems just as flimsy 
    */
    if (current.HP_CURR && current.HP_CURR >= current.HP_MAX + current.HP_REGEN) {
        current.IS_HP_TICKING = false

    } else if (current.HP_CURR && current.HP_CURR < current.HP_MAX && current.HP_REGEN) {
        // console.log('Should be increasing HP')
        current.HP_CURR += current.HP_REGEN
        current.IS_HP_TICKING = true
        sendToBTT(config.UUIDs.statsUUID, `${current.HP_CURR}/${current.HP_MAX}`, 'Black', 255)
    }

    // MANA TICK
    // if (current.MANA_CURR && current.MANA_CURR >= current.MANA_MAX + current.MANA_REGEN) {
    //     current.IS_MANA_TICKING = false
    //     clearInterval(tick)
    // } else if (current.MANA_CURR && current.MANA_CURR < current.MANA_MAX && current.MANA_REGEN) {
    //     current.MANA_CURR += current.REGEN
    //     current.IS_MANA_TICKING = true
    // }
}, 6000)


// TODO: benchmark if this should be singular first to match faster
// https://github.com/kai4785/takp/blob/master/dps.py#L298 - referenced throughout
const meleeVerbsReg = /smash|smashes|hit|slash|claw|claws|crush|pierce|kick|bash|maul|gore|gores|slice|slices|slashes|crushes|hits|punch|punches|kicks|bashes|bites|pierces|mauls|backstab|backstabs|rends/

const processLine = line => {
    // cut off timestamp
    const data = line.substring(26).trim()
    const { tracking } = config // ease of use

    if (data.includes('YOU for')) {
        // console.log('got YOU for')
        dpsEvents.emit('combatStart')
        // TODO: wrap this in with the else below so you can track DPS against you
        if (!tracking.TRACK_HEALTH) return
        // Torven: That data was just from me using ctrl-f in a text editor after copying snips of log into new files. I just searched for 'YOU, but misses!' and 'YOU for'.
        // seems like it's a probably solid way to do it
        // * Take some guesses on current HP?
        // this won't work if mob has number in name (does that ever happen?)
        const damage = parseInt(/\b\d+\b/g.exec(data)[0])
        console.log('OTHER hit PLAYER for ', damage)
        
        // TODO: centralize this and dps.current
        if (current.HP_CURR) current.HP_CURR -= damage
        else current.HP_CURR = current.HP_MAX - damage

        sendToBTT(config.UUIDs.statsUUID, `${current.HP_CURR}/${current.HP_MAX}`, 'Black', 255)

    } else if (tracking.TRACK_DPS && meleeVerbsReg.test(data)) {
            /*
            self.death_re1 = re.compile(fr'({self.pc_regexp}) have slain ({self.pc_regexp})!')
            self.death_re2 = re.compile(fr'({self.pc_regexp}) (has|have) been slain by ({self.pc_regexp})!')
            self.death_re3 = re.compile(fr'({self.pc_regexp}) died\.')
            self.heal_re = re.compile(f'(You) have been (healed) for ([0-9]+) points? of damage\.')
            */
            
            if (data.includes('was hit by non-melee for')) {
                // get target, damage
                const [target, damage] = data.split(/(?:\swas hit by non-melee for\s)(\d+)/)

                dpsEvents.emit('playerSpellDamage', { target, damage })
            } else if (data.includes('lands a Crippling Blow')) {
                // TODO
                return
            } else if (data.includes('cores a critical hit')) {
                // TODO
                return
            } else if (/(have|has been) slain/.test(data)) {
                // TODO
                // dpsEvents.emit('otherDeath', {})
                return
            } else if (data.includes('thorns')) {
                // TODO
                return
            }  else if (!/YOU riposte|ripostes!|YOU dodge|dodges!|YOU parry|parries!|but miss/.test(data)) {

                // sorta based on self.melee_reg = re.compile(fr'^({self.pc_regexp}) ({self.melee_verbs}) ({self.pc_regexp}) for ([0-9]+) points? of damage\.')
                // put plural verbs first so that we don't cut off the s in some cases
                const hitLineSplitReg = /(\s)(punches|kicks|bashes|bites|pierces|mauls|slices|slashes|crushes|hits|gores|claws|smashes|backstabs|rends|smash|hit|slash|claw|crush|pierce|kick|bash|maul|gore|slice|punch|backstab)(\s)(.*)( for )(\d+)/

                const [attacker, , verb, , target, , damage] = data.split(hitLineSplitReg)
                console.log(`${attacker} ${verb} ${target} for ${damage}`)
                if (!attacker || !target || !damage) {
                    console.error(`!attacker ${attacker} || !target ${target} || !damage ${damage}`)
                    return 
                }

                // don't think I need this
                // if (!current.IN_COMBAT) {
                //     // TODO - combine with dps.current
                //     current.IN_COMBAT = true
                //     dpsEvents.emit('combatStart')
                // }

                if (tracking.TRACK_PLAYER_DPS && attacker === 'You') {
                    console.log('PLAYER hit OTHER ', target, damage)
                    // ----- YOU HIT OTHER -----
                    // You slash tormented dead for 20 points of damage.
                    dpsEvents.emit('playerHitOther', { target, damage })

                } else if (tracking.TRACK_PET_DPS && attacker === current.petName) {
                    // ----- PET HIT OTHER -----
                    // Vabarab hits tormented dead for 10 points of damage.
                    dpsEvents.emit('petHitOther', { target, damage })
                } else {
                    // ----- OTHER HIT OTHER -----
                    // console.log('Hit else in attack tree')
                    // TODO
                    return
                }
            }
    } else if (data.includes('You have been healed for')) {
        const healAmount = +data.split(/\D+/)[1]
        // console.log('healing for ', healAmount)
        
        current.HP_CURR += healAmount
        
        if (current.HP_CURR > current.HP_MAX) current.HP_CURR = current.HP_MAX
        
        // TODO: color should change on percentages
        // TODO: percentage support
        sendToBTT(config.UUIDs.statsUUID, `${current.HP_CURR}/${current.HP_MAX}`, 'Black', 255)
    } else if (data.includes(config.parseChannel)) {
        // * Possible to parse /say things for additional benefit		
        // 	* mitigation things
        // Get rid of "You tell Parsetest: 2, '" and the last '
        const trimmed = data.substring(14 + config.parseChannel.length, data.length - 1)
        const split = trimmed.split(' ')
        // console.log('got parsechannel | split: ', split)
        const word = split[0]

        switch (word) {
            case 'stats': {
                // 	* stats IE You tell Parsetest: 2, 'str 85 agi 75 wis 91 sta 98 dex 84 int 75 cha 85'
                // This needs a ton of work on formatting
                // Seems somewhat useless, too
                const stats = split.reduce((acc, cur, i) => {
                    acc += cur.toUpperCase()
                    // split stats into two lines
                    if (i === Math.floor(split.length / 2)) acc += '\n'
                    return acc
                }, '')

                sendToBTT(config.UUIDs.statsUUID, stats, 'Black', 255)
                break
            }
            case 'hp': {
                //  * current HP %
                // TODO: need to be able to set a max and report curr
                current.HP_CURR = +split[1]
                // user sent "curr max" HP IE "50 100" to show current HP and max HP
                // if they didn't max and curr are same but only set if no max set this session
                if (split[2] || !current.HP_MAX) current.HP_MAX = split[2] ? +split[2] : +split[1]

                sendToBTT(config.UUIDs.statsUUID, `${current.HP_CURR}/${current.HP_MAX}`, 'Black', 255)

                break
            }
            case 'mana': {
                // untested
                //  * current mana %... but this number isn't shown in client...
                current.MANA_CURR = +split[1]
                // user sent "curr max" MANA IE "50 100" to show current MANA and max MANA
                // if they didn't max and curr are same but only set if no max set this session
                if (trimmed[2] || !current.MANA_MAX) current.MANA_MAX = trimmed[2] ? +trimmed[2] : +trimmed[1]
                // sendToBTT
                break
            }
            case 'regen': {
                // set regen
                // TODO: use sitting and standing regen?
                current.HP_REGEN = +split[1]
                break
            }
            case 'pet': {
                current.PET_NAME = split[1]
                break
            }
            default: {
                // nothing
            }
        }
    } else if (data.includes('You have entered')) {
        // works...usually TODO: figure this out
        console.log('got zone message, setting zone')
        // * Current zone (links to wiki page)
        // You have entered Dagnor's Cauldron.
        const zoneName = data.substring(17, data.length - 1)

        sendToBTT(config.UUIDs.zoneUUID, zoneName, 'Astronaut Blue', 200)
    } else if (data.includes('You think you are heading')) {
        console.log('got direction message, setting direction')
        // * Direction -- could use sense heading, could use loc math?
        // You think you are heading North.
        const direction = data.substring(26, data.length - 1)
        
        sendToBTT(config.UUIDs.directionUUID, direction, 'White', 200)
    } else if (data.includes('Your Location')) {
        console.log('got location message, setting direction')
        // * X, Y location
        // Your Location is -319.37, 881.40, -92.25
        // get rid of Z (for now) and remove the space
        const xy = data.substring(16, data.lastIndexOf(',')).replace(' ', '')
        
        sendToBTT(config.UUIDs.locUUID, xy, 'Big Yellow Taxi')
    } else {
        // do nothing
    }
}

exports.processLine = processLine

tail.on('line', processLine)

tail.on('error', err => {
    console.error(err)
})