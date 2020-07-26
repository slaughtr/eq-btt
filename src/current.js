const { config } = require('../config')
// for tracking things like HP etc
exports.current = {
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
    PLAYER_NAME: config.logFile.split('_')[1],
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