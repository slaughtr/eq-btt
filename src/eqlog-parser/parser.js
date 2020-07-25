const { Tail } = require('tail')
const { config } = require('../config')
// TODO: array support
const tail = new Tail(config.logFile)
const PLAYER_NAME = config.logFile.split('_')[1]

const { sendToBTT } = require('../btt-messenger/messenger')
const { dpsEvents } = require('./dps')

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
    IN_COMBAT: false
}

// Needs a lot of work
const tick = setInterval(() => {
    console.log('Tick')
    // HP TICK
    if (current.HP_CURR && current.HP_CURR >= current.HP_MAX + current.HP_REGEN) {

        current.IS_HP_TICKING = false

    } else if (current.HP_CURR && current.HP_CURR < current.HP_MAX && current.HP_REGEN) {

        current.HP_CURR += current.REGEN
        current.IS_HP_TICKING = true
    }

    // MANA TICK
    if (current.MANA_CURR && current.MANA_CURR >= current.MANA_MAX + current.MANA_REGEN) {

        current.IS_MANA_TICKING = false
        clearInterval(tick)

    } else if (current.MANA_CURR && current.MANA_CURR < current.MANA_MAX && current.MANA_REGEN) {

        current.MANA_CURR += current.REGEN
        current.IS_MANA_TICKING = true
    }
}, 6000)

const processLine = line => {
    // cut off timestamp
    const data = line.substring(26).trim()
    const { tracking } = config

    if (data.includes('YOU for')) {
        // TODO: wrap this in with the else below so you can track DPS against you
        if (!tracking.TRACK_HEALTH) return
        // Torven: That data was just from me using ctrl-f in a text editor after copying snips of log into new files. I just searched for 'YOU, but misses!' and 'YOU for'.
        // seems like it's a probably solid way to do it
        // * Take some guesses on current HP?
        // this won't work if mob has number in name (does that ever happen?)
        const damage = /\b\d+\b/g.exec(data)
        if (current.HP_CURR) current.HP_CURR -= damage
        // sendToBTT
    } else if (tracking.TRACK_DPS) {
        // TODO: benchmark if this should be singular first to match faster
        // https://github.com/kai4785/takp/blob/master/dps.py#L298 - referenced throughout
        if (/smash|smashes|hit|slash|claw|claws|crush|pierce|kick|bash|maul|gore|gores|slice|slices|slashes|crushes|hits|punch|punches|kicks|bashes|bites|pierces|mauls|backstab|backstabs|rends/.test(data)) {
            /*
            Live DPS
            self.melee_verbs = "smash|smashes|hit|slash|claw|claws|crush|pierce|kick|bash|maul|gore|gores|slice|slices|slashes|crushes|hits|punch|punches|kicks|bashes|bites|pierces|mauls|backstab|backstabs|rends"
            self.cripp_re = re.compile(fr'^({self.pc_regexp}) lands a Crippling Blow\!\(([0-9]+)\)')
            self.crit_re = re.compile(fr'^({self.pc_regexp}) Scores a critical hit\!\(([0-9]+)\)')
            self.magic_re = re.compile(fr'({self.pc_regexp}) was (hit by non-melee) for ([0-9]+) points? of damage\.')
            self.death_re1 = re.compile(fr'({self.pc_regexp}) have slain ({self.pc_regexp})!')
            self.death_re2 = re.compile(fr'({self.pc_regexp}) (has|have) been slain by ({self.pc_regexp})!')
            self.death_re3 = re.compile(fr'({self.pc_regexp}) died\.')
            self.heal_re = re.compile(f'(You) have been (healed) for ([0-9]+) points? of damage\.')
            */
           if (!/YOU riposte|ripostes!|YOU dodge|dodges!|YOU parry|parries!|but miss/.test(line)) {
               // sorta based on self.melee_reg = re.compile(fr'^({self.pc_regexp}) ({self.melee_verbs}) ({self.pc_regexp}) for ([0-9]+) points? of damage\.')
               // put plural verbs first so that we don't cut off the s in some cases
                const [attacker, , verb, , target, , damage] = line.split(/(\s)(punches|kicks|bashes|bites|pierces|mauls|slices|slashes|crushes|hits|gores|claws|smashes|backstabs|rends|smash|hit|slash|claw|crush|pierce|kick|bash|maul|gore|slice|punch|backstab)(\s)(.*)( for )(\d+)/)
                
                if (!current.IN_COMBAT) {
                    current.IN_COMBAT = true
                    dpsEvents.emit('combatStart')
                }
                
                
                if (tracking.TRACK_PLAYER_DPS && data.startsWith('You')) {
                    // You slash tormented dead for 20 points of damage.
                    const other = data.split(/You smash|hit|slash|claw|crush|pierce|kick|bash|maul|gore|slice|punch|backstab/)[1].split(' for ')
                    dpsEvents.emit('playerHitOther', { other, damage })
                    
                } else if (tracking.TRACK_PET_DPS && data.includes(current.petName)) {
                    
                }
            }

        } else if (data.includes('lands a Crippling Blow')) {

            if (tracking.TRACK_PLAYER_DPS && data.startsWith(PLAYER_NAME)) {

            } else if (tracking.TRACK_PET_DPS && data.startsWith(current.PET_NAME)) {

            }
            // casing on Scores here??
        } else if (data.includes('Scores a critical hit')) {

            if (tracking.TRACK_PLAYER_DPS && data.startsWith(PLAYER_NAME)) {

            } else if (tracking.TRACK_PET_DPS && data.startsWith(current.PET_NAME)) {

            }

        }
    } else if (data.includes(config.parseChannel)) {
    // * Possible to parse /say things for additional benefit		
    // 	* mitigation things
    // Get rid of "You tell Parsetest: 2, '" and the last '
    const trimmed = data.substring(14 + config.parseChannel.length, data.length - 1)
    const split = trimmed.split(' ')
    const word = trimmed[0]
    switch (word) {
        case 'stats': {
            // 	* stats IE You tell Parsetest: 2, 'str 85 agi 75 wis 91 sta 98 dex 84 int 75 cha 85'
            const stats = split.reduce((acc, cur, i) => {
                acc += cur.toUpperCase()
                // split stats into two lines
                if (i === Math.floor(trimmed.length / 2)) acc += '\n'
                return acc
            }, '')

            sendToBTT(config.UUIDs.statsUUID, stats, 'Black', 255)
            break
        }
        case 'hp': {
            //  * current HP %
            current.HP_CURR = trimmed[1]
            // user sent "curr max" HP IE "50 100" to show current HP and max HP
            // if they didn't max and curr are same but only set if no max set this session
            if (trimmed[2] || !current.HP_MAX) current.HP_MAX = trimmed[2] ? trimmed[2] : trimmed[1]
            // sendToBTT
            break
        }
        case 'mana': {
            //  * current mana %... but this number isn't show in client...
            current.MANA_CURR = trimmed[1]
            // user sent "curr max" MANA IE "50 100" to show current MANA and max MANA
            // if they didn't max and curr are same but only set if no max set this session
            if (trimmed[2] || !current.MANA_MAX) current.MANA_MAX = trimmed[2] ? trimmed[2] : trimmed[1]
            // sendToBTT
            break
        }
        case 'regen': {
            // set regen
        }
        default: {
            // nothing
        }
    }
} else if (data.includes('You have entered')) {
    // * Current zone (links to wiki page)
    // You have entered Dagnor's Cauldron.
    const zoneName = data.substring(17, data.length - 1)
    sendToBTT(config.UUIDs.zoneUUID, zoneName, 'Astronaut Blue', 200)
} else if (data.includes('You think you are heading')) {
    // * Direction -- could use sense heading, could use loc math?
    // You think you are heading North.
    const direction = data.substring(26, data.length - 1)
    sendToBTT(config.UUIDs.directionUUID, direction, 'White', 200)
} else if (data.includes('Your Location')) {
    // * X, Y location
    // Your Location is -319.37, 881.40, -92.25
    // get rid of Z (for now) and remove the space
    const xy = data.substring(16, data.lastIndexOf(',')).replace(' ', '')
    sendToBTT(config.UUIDs.locUUID, xy, 'Big Yellow Taxi')
} else {
    // do nothing
}
}

tail.on('line', processLine)

tail.on('error', err => {
    console.error(err)
})