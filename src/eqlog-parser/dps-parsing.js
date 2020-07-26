const { config } = require('../../config')
const { tracking } = config // ease of use
const { dpsEvents } = require('./dps-events')
const { sendToBTT } = require('../btt-messenger/messenger')
const { current } = require('../current')

exports.dpsParsing = data => {
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
    } else if (!/YOU riposte|ripostes!|YOU dodge|dodges!|YOU parry|parries!|but miss/.test(data)) {
        // sorta based on self.melee_reg = re.compile(fr'^({self.pc_regexp}) ({self.melee_verbs}) ({self.pc_regexp}) for ([0-9]+) points? of damage\.')
        // put plural verbs first so that we don't cut off the s in some cases
        const hitLineSplitReg = /(\s)(punches|kicks|bashes|bites|pierces|mauls|slices|slashes|crushes|hits|gores|claws|smashes|backstabs|rends|smash|hit|slash|claw|crush|pierce|kick|bash|maul|gore|slice|punch|backstab)(\s)(.*)( for )(\d+)/

        const [attacker, , verb, , target, , damage] = data.split(hitLineSplitReg)
        console.log(`${attacker} ${verb} ${target} for ${damage}`)
        if (!attacker || !target || !damage) {
            console.error(`!attacker ${attacker} || !target ${target} || !damage ${damage}`)
            return
        }

        // TODO figure out if this should go here or dps-events
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
}

exports.playerGetsHitParsing = data => {
    // console.log('got YOU for')
    dpsEvents.emit('combatStart')
    // TODO: wrap this in with the else below so you can track DPS against you
    if (!tracking.TRACK_HEALTH) return
    // Torven: That data was just from me using ctrl-f in a text editor after copying snips of log into new files. I just searched for 'YOU, but misses!' and 'YOU for'.
    // seems like it's a probably solid way to do it
    // * Take some guesses on current HP?
    // this won't work if mob has number in name (does that ever happen?)
    const damageMatch = /\b\d+\b/g.exec(data)
    const damage = parseInt(damageMatch[0])
    console.log('OTHER hit PLAYER for ', damage)

    // TODO: centralize this and dps.current
    if (current.HP_CURR) current.HP_CURR -= damage
    else current.HP_CURR = current.HP_MAX - damage

    sendToBTT(config.UUIDs.statsUUID, `${current.HP_CURR}/${current.HP_MAX}`, 'Black', 255)
}