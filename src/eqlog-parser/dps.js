const EventEmitter = require("events")
class DPSEmitter extends EventEmitter { } // this is apparently recommended for EventEmitter
const dpsEvents = new DPSEmitter()
exports.dpsEvents = dpsEvents
const { config } = require('../../config')
const { sendToBTT } = require('../btt-messenger/messenger')

const current = {
    PLAYER_HIT_OTHER_DAMAGE: { TOTAL: 0 },
    PET_HIT_OTHER_DAMAGE: { TOTAL: 0 },
    OTHER_HIT_PLAYER_DAMAGE: { TOTAL: 0 },
    OTHER_HIT_PET_DAMAGE: { TOTAL: 0 },
    TEN_SEC_AVERAGE: { TOTAL: 0 },
    TEN_SEC_HISTORY: [],
    IS_TRACKING_PLAYER_DPS: false,
    IS_TRACKING_PET_DPS: false
}

// oooh nullish coalescing
const dpsDuration = config.tracking.DPS_DURATION ?? 10000

// setTimeout or setInterval?
const playerDpsCalcTimer = setInterval(() => {
    current.IS_TRACKING_PLAYER_DPS = true

    // calculate for last dpsDuration  
    for (const other of Object.keys(current.PLAYER_HIT_OTHER_DAMAGE)) {
        const damage = current.PLAYER_HIT_OTHER_DAMAGE[other]
        const DPS = damage / dpsDuration
        console.log(`DPS against ${other} was ${DPS.toPrecision(4)} in the last ${dpsDuration / 1000} seconds. Total damage to ${other} was ${damage}`)
        if (other === 'TOTAL') sendToBTT(config.UUIDs.dpsUUID, DPS, 'Cadmium Red', 255)

        // just for testing
        current.PLAYER_HIT_OTHER_DAMAGE = {TOTAL: 0}
    }

}, dpsDuration)

const petDpsCalcTimer = setTimeout(() => {
    current.IS_TRACKING_PET_DPS = true

    // calculate for last dpsDuration
    for (const other of Object.keys(current.PET_HIT_OTHER_DAMAGE)) {
        const damage = current.PET_HIT_OTHER_DAMAGE[other]
        const DPS = damage / dpsDuration
        console.log(`Pet DPS against ${other} was ${DPS} in the last ${dpsDuration / 1000} seconds.`)
        if (other === 'TOTAL') sendToBTT(config.UUIDs.petDpsUUID, DPS, 'Duckie Yellow', 255)
    }

}, dpsDuration)

if (!config.tracking.TRACK_DPS) {
    clearInterval(playerDpsCalcTimer)
    clearTimeout(petDpsCalcTimer)
}

// If I don't end up using this. to ref the emitter I can change to arrow functions
dpsEvents.on('playerHitOther', function ({other, damage}) {
    if (current.PLAYER_HIT_OTHER_DAMAGE[other]) current.PLAYER_HIT_OTHER_DAMAGE[other] += +damage
    else current.PLAYER_HIT_OTHER_DAMAGE[other] = 0
    current.PLAYER_HIT_OTHER_DAMAGE.TOTAL += +damage
    console.log('got hit, running total for ' + other, current.PLAYER_HIT_OTHER_DAMAGE[other])
    console.log('got hit, running total for TOTAL', current.PLAYER_HIT_OTHER_DAMAGE.TOTAL)
})

dpsEvents.on('petHitOther', function ({other, damage}) {
    current.PET_HIT_OTHER_DAMAGE[other] += damage
    current.PET_HIT_OTHER_DAMAGE.TOTAL += damage
})

dpsEvents.on('combatStart', function () {
    // if (config.tracking.TRACK_PLAYER_DPS) playerDpsCalcTimer
    // if (config.tracking.TRACK_PET_DPS) petDpsCalcTimer
    if (!current.IN_COMBAT) {
        current.IN_COMBAT = true
        clearInterval(playerDpsCalcTimer)
        playerDpsCalcTimer
    }
})

dpsEvents.on('combatEnd', function () {
    if (current.IS_TRACKING_PLAYER_DPS) {
        // calculate combat DPS
        clearInterval(playerDpsCalcTimer)
    }
    if (current.IS_TRACKING_PET_DPS) {
        // calculate combat DPS
        clearInterval(petDpsCalcTimer)
    }
})

// Leave these off for now
// dpsEvents.on('otherHitPlayer', function ({other, damage}) {
//     current.OTHER_HIT_PLAYER_DAMAGE[other] += damage
//     current.OTHER_HIT_PLAYER_DAMAGE.TOTAL += damage
// })

// dpsEvents.on('otherHitPet', function ({other, damage}) {
//     current.OTHER_HIT_PET_DAMAGE[other] += damage
//     current.OTHER_HIT_PET_DAMAGE.TOTAL += damage

// })



// dpsEvents.emit(event, { other, damage })