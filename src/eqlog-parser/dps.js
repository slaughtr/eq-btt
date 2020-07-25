const EventEmitter = require("events")
class DPSEmitter extends EventEmitter { } // this is apparently recommended for EventEmitter
const dpsEvents = new DPSEmitter()
exports.dpsEvents = dpsEvents
const { config } = require('./config')
const {sendToBTT} = require('../btt-messenger/messenger')

const current = {
    PLAYER_HIT_OTHER_DAMAGE: {TOTAL: 0},
    PET_HIT_OTHER_DAMAGE: { TOTAL: 0 },
    OTHER_HIT_PLAYER_DAMAGE: { TOTAL: 0 },
    OTHER_HIT_PET_DAMAGE: { TOTAL: 0 },
    TEN_SEC_AVERAGE: { TOTAL: 0 },
    TEN_SEC_HISTORY: []
}

// oooh nullish coalescing
const dpsDuration = config.tracking.DPS_DURATION ?? 10000

// setTimeout or setInterval?
const playerDpsCalcTimer = setTimeout(() => {
    for (const other of Object.keys(current.PLAYER_HIT_OTHER_DAMAGE)) {
        const damage = current.PLAYER_HIT_OTHER_DAMAGE[other]
        const DPS = damage / dpsDuration
        console.log(`DPS against ${other} was ${DPS} in the last ${dpsDuration/1000} seconds.`)
        if (other === 'TOTAL') sendToBTT(config.UUIDs.dpsUUID, DPS, 'Cadmium Red', 255)
    }
    
}, dpsDuration)

const petDpsCalcTimer = setTimeout(() => {
    for (const other of Object.keys(current.PET_HIT_OTHER_DAMAGE)) {
        const damage = current.PET_HIT_OTHER_DAMAGE[other]
        const DPS = damage / dpsDuration
        console.log(`Pet DPS against ${other} was ${DPS} in the last ${dpsDuration/1000} seconds.`)
        if (other === 'TOTAL') sendToBTT(config.UUIDs.petDpsUUID, DPS, 'Duckie Yellow', 255)
    }
    
}, dpsDuration)

// If I don't end up using this. to ref the emitter I can change to arrow functions
dpsEvents.on('playerHitOther', function (other, damage) {
    current.PLAYER_HIT_OTHER_DAMAGE[other] += damage
    current.PLAYER_HIT_OTHER_DAMAGE.TOTAL += damage
})

dpsEvents.on('petHitOther', function (other, damage) {
    current.PET_HIT_OTHER_DAMAGE[other] += damage
    current.PET_HIT_OTHER_DAMAGE.TOTAL += damage
})

dpsEvents.on('combatStart', function() {

})

dpsEvents.on('combatEnd', function() {

})

// Leave these off for now
// dpsEvents.on('otherHitPlayer', function (other, damage) {
//     current.OTHER_HIT_PLAYER_DAMAGE[other] += damage
//     current.OTHER_HIT_PLAYER_DAMAGE.TOTAL += damage
// })

// dpsEvents.on('otherHitPet', function (other, damage) {
//     current.OTHER_HIT_PET_DAMAGE[other] += damage
//     current.OTHER_HIT_PET_DAMAGE.TOTAL += damage

// })



// emitter.emit("message", { data: "Data" })