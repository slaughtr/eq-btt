const dayjs = require('dayjs')
const { default: ShortUniqueId } = require('short-unique-id');
const uid = new ShortUniqueId();


// Used this + https://www.jsonschema.net/home to make schema
const baseJSON = {
    "id": "qjPKhh",
    "start": 1595808387,
    "end": 1595808402,
    "length": 35,
    "attacker": {
        "type": "object",
        "ref": "entity"
    },
    "target": {
        "type": "object",
        "ref": "entity"
    },
    "meleeDamage": 24,
    "spellDamage": 0,
    "totalDamage": 24,
    "meleeDPS": 0.96,
    "spellDPS": 0.00,
    "totalDPS": 0.96
}

exports.combatSchema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "type": "object",
    "title": "combat schema",
    "description": "Describes the combat document",
    "examples": [
        {
            "id": "qjPKhh",
            "start": 1595808387,
            "end": 1595808402,
            "length": 35,
            "attacker": {
                "type": "object",
                "ref": "entity"
            },
            "target": {
                "type": "object",
                "ref": "entity"
            },
            "meleeDamage": 24,
            "spellDamage": 0,
            "totalDamage": 24,
            "meleeDPS": 0.96,
            "spellDPS": 0.0,
            "totalDPS": 0.96
        }
    ],
    "required": ["id", "attacker", "target", "meleeDamage", "spellDamage", "totalDamage"],
    "properties": {
        "id": {
            "type": "string",
            "title": "id schema",
            "description": "Short UUID to identify document",
            "default": uid(),
            "primary": true,
            "examples": [
                'qjPKhh', 'b3DU52'
            ]
        },
        "start": {
            "type": "integer",
            "title": "start schema",
            "description": "Unix epoch seconds timestamp indicating when recording began for this combat",
            "default": dayjs().valueOf(),
            "examples": [
                1595808387
            ]
        },
        "end": {
            "type": "integer",
            "title": "end schema",
            "description": "Unix epoch seconds timestamp indicating when recording began for this combat",
            "examples": [
                1595808402
            ]
        },
        "length": {
            "type": "integer",
            "title": "length schema",
            "description": "Duration of combat in seconds",
            "examples": [
                35
            ]
        },
        "attacker": {
            "type": "object",
            "ref": "entity"
        },
        "target": {
            "type": "object",
            "ref": "entity"
        },
        "meleeDamage": {
            "type": "integer",
            "title": "meleeDamage schema",
            "description": "Total melee damage recorded by attacker against target",
            "default": 0,
            "examples": [
                24
            ]
        },
        "spellDamage": {
            "type": "integer",
            "title": "spellDamage schema",
            "description": "Total spell and damage shield damage recorded by attacker against target",
            "default": 0,
            "examples": [
                0
            ]
        },
        "totalDamage": {
            "type": "integer",
            "title": "totalDamage schema",
            "description": "Total damage from all sources recorded by attacker against target. spellDamage + meleeDamage",
            "default": 0,
            "examples": [
                24
            ]
        },
        "meleeDPS": {
            "type": "number",
            "title": "meleeDPS schema",
            "description": "Total DPS recorded for combat. meleeDamage / length",
            "default": 0.0,
            "examples": [
                0.96
            ]
        },
        "spellDPS": {
            "type": "number",
            "title": "spellDPS schema",
            "description": "Total DPS recorded for combat. spellDamage / length",
            "default": 0.0,
            "examples": [
                0.0
            ]
        },
        "totalDPS": {
            "type": "number",
            "title": "totalDPS schema",
            "description": "Total DPS recorded for combat. totalDamage / length",
            "default": 0.0,
            "examples": [
                0.96
            ]
        }
    },
    "indexes": [
        "to",
        "from"
    ]
}