const EventEmitter = require("events")
class DPSEmitter extends EventEmitter { } // this is apparently recommended for EventEmitter
const dayjs = require('dayjs')

const dpsEvents = new DPSEmitter()

const { config } = require('../../config')
const { sendToBTT } = require('../btt-messenger/messenger')

const current = {
    PLAYER_HIT_OTHER_DAMAGE: { TOTAL: 0 },
    PLAYER_SPELL_DAMAGE: { TOTAL: 0 },
    PET_HIT_OTHER_DAMAGE: { TOTAL: 0 },
    OTHER_HIT_PLAYER_DAMAGE: { TOTAL: 0 },
    OTHER_HIT_PET_DAMAGE: { TOTAL: 0 },
    TEN_SEC_AVERAGE: { TOTAL: 0 },
    TEN_SEC_HISTORY: [],
    IS_IN_COMBAT: false,
    LAST_COMBAT_PING: 0,
    COMBAT_START: Number.MAX_SAFE_INTEGER,
    TURNED_OFF_DPS: false
}

// oooh nullish coalescing
const dpsDuration = config.tracking.DPS_DURATION ?? 10000
const now = () => dayjs().valueOf()
// let start = now()

const playerDpsCalcTimer = setInterval(() => {
    // don't update out of combat
    if (current.IS_IN_COMBAT) {
        // calculate for last dpsDuration  
        for (const other of Object.keys(current.PLAYER_HIT_OTHER_DAMAGE)) {
            const seconds = (now() - current.COMBAT_START) / 1000
            const damage = current.PLAYER_HIT_OTHER_DAMAGE[other]
            const spellDamage = current.PLAYER_SPELL_DAMAGE[other] || 0
            const meleeDPS = damage / seconds
            const spellDPS = spellDamage / seconds
            const totalDPS = meleeDPS + spellDPS
            console.log(`
            DPS against ${other} was ${meleeDPS} in the last ${seconds} seconds. 
            ${spellDPS ? `Spell DPS against ${other} was ${spellDPS} in the last ${seconds} seconds.
            Total DPS against ${other} was ${totalDPS} in the last ${seconds} seconds.
            ` : ''} 
            Total damage to ${other} was ${damage + spellDamage} and spell damage was ${spellDamage}
            `)
            // console.log((now() - start)/1000)
            if (other === 'TOTAL') sendToBTT(config.UUIDs.dpsUUID, totalDPS.toPrecision(4), 'Cadmium Red', 255)

        }

        // end combat after 6 seconds of no combat events
        if (now() - current.LAST_COMBAT_PING > 6000) {
            dpsEvents.emit('combatEnd')
        }
    }

    // just for testing def not a viable way to actually do things
    // current.PLAYER_HIT_OTHER_DAMAGE = {TOTAL: 0}
}, 5000)

const petDpsCalcTimer = setInterval(() => {
    // calculate for last dpsDuration
    // TODO: update to reflect player DPS calcs
    for (const other of Object.keys(current.PET_HIT_OTHER_DAMAGE)) {
        const damage = current.PET_HIT_OTHER_DAMAGE[other]
        const DPS = damage / dpsDuration
        console.log(`Pet DPS against ${other} was ${DPS} in the last ${dpsDuration / 1000} seconds.`)
        if (other === 'TOTAL') sendToBTT(config.UUIDs.petDpsUUID, DPS, 'Duckie Yellow', 255)
    }

}, 5000)

if (!config.tracking.TRACK_DPS) {
    // If I don't end up using this. to ref the emitter I can change to arrow functions
    dpsEvents.on('playerHitOther', function ({ target: other, damage = 0 }) {
        dpsEvents.emit('combatStart')

        if (!current.PLAYER_HIT_OTHER_DAMAGE[other]) current.PLAYER_HIT_OTHER_DAMAGE[other] = 0

        current.PLAYER_HIT_OTHER_DAMAGE[other] = +damage


        current.PLAYER_HIT_OTHER_DAMAGE.TOTAL += +damage
        // console.log('got hit, running total for ' + other, current.PLAYER_HIT_OTHER_DAMAGE[other])
        // console.log('got hit, running total for TOTAL', current.PLAYER_HIT_OTHER_DAMAGE.TOTAL)
    })

    dpsEvents.on('playerSpellDamage', function ({ target: other, damage = 0 }) {
        dpsEvents.emit('combatStart')

        if (current.PLAYER_SPELL_DAMAGE[other]) current.PLAYER_SPELL_DAMAGE[other] += +damage
        else current.PLAYER_SPELL_DAMAGE[other] = +damage

        current.PLAYER_SPELL_DAMAGE.TOTAL += +damage
        // console.log('got spell damage, running total for ' + other, current.PLAYER_SPELL_DAMAGE[other])
    })

    dpsEvents.on('petHitOther', function ({ target: other, damage }) {
        dpsEvents.emit('combatStart')

        if (!current.PLAYER_SPELL_DAMAGE[other]) current.PLAYER_SPELL_DAMAGE[other] = 0

        current.PET_HIT_OTHER_DAMAGE[other] += damage
        current.PET_HIT_OTHER_DAMAGE.TOTAL += damage
    })

    dpsEvents.on('combatStart', function () {
        // if (config.tracking.TRACK_PLAYER_DPS) playerDpsCalcTimer
        // if (config.tracking.TRACK_PET_DPS) petDpsCalcTimer
        if (!current.IN_COMBAT) {
            current.IS_IN_COMBAT = true
            current.COMBAT_START = now()
        }
    })

    dpsEvents.on('combatEnd', function () {
        current.IS_IN_COMBAT = false
    })

    // Not currently used
    dpsEvents.on('otherHitPlayer', function ({ other, damage }) {
        current.OTHER_HIT_PLAYER_DAMAGE[other] += damage
        current.OTHER_HIT_PLAYER_DAMAGE.TOTAL += damage
    })

    dpsEvents.on('otherHitPet', function ({ other, damage }) {
        current.OTHER_HIT_PET_DAMAGE[other] += damage
        current.OTHER_HIT_PET_DAMAGE.TOTAL += damage

    })

} else {
    if (!current.TURNED_OFF_DPS) {
        clearInterval(playerDpsCalcTimer)
        clearInterval(petDpsCalcTimer)
        current.TURNED_OFF_DPS = true
    }
}

exports.dpsEvents = dpsEvents