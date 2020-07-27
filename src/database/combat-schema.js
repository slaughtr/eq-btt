const baseJSON = {
    "start": 1595808387,
    "end": 1595808402,
    "length": 35,
    "by": {
        "type": "object",
        "ref": "entity"
    },
    "to": {
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

exports.battleSchema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$id": "http://example.com/example.json",
    "type": "object",
    "title": "The root schema",
    "description": "The root schema comprises the entire JSON document.",
    "default": {},
    "examples": [
        {
            "start": 1595808387,
            "end": 1595808402,
            "length": 35,
            "by": {
                "type": "object",
                "ref": "entity"
            },
            "to": {
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
    "required": [],
    "properties": {
        "start": {
            "$id": "#/properties/start",
            "type": "integer",
            "title": "The start schema",
            "description": "An explanation about the purpose of this instance.",
            "default": 0,
            "examples": [
                1595808387
            ]
        },
        "end": {
            "$id": "#/properties/end",
            "type": "integer",
            "title": "The end schema",
            "description": "An explanation about the purpose of this instance.",
            "default": 0,
            "examples": [
                1595808402
            ]
        },
        "length": {
            "$id": "#/properties/length",
            "type": "integer",
            "title": "The length schema",
            "description": "An explanation about the purpose of this instance.",
            "default": 0,
            "examples": [
                35
            ]
        },
        "by": {
            "$id": "#/properties/by",
            "type": "object",
            "ref": "entity",
            "title": "The by schema",
            "description": "An explanation about the purpose of this instance.",
            "default": {},
            "additionalProperties": false
        },
        "to": {
            "$id": "#/properties/to",
            "type": "object",
            "ref": "entity",
            "title": "The to schema",
            "description": "An explanation about the purpose of this instance.",
            "default": {},
            "required": [],
            "additionalProperties": false
        },
        "meleeDamage": {
            "$id": "#/properties/meleeDamage",
            "type": "integer",
            "title": "The meleeDamage schema",
            "description": "An explanation about the purpose of this instance.",
            "default": 0,
            "examples": [
                24
            ]
        },
        "spellDamage": {
            "$id": "#/properties/spellDamage",
            "type": "integer",
            "title": "The spellDamage schema",
            "description": "An explanation about the purpose of this instance.",
            "default": 0,
            "examples": [
                0
            ]
        },
        "totalDamage": {
            "$id": "#/properties/totalDamage",
            "type": "integer",
            "title": "The totalDamage schema",
            "description": "An explanation about the purpose of this instance.",
            "default": 0,
            "examples": [
                24
            ]
        },
        "meleeDPS": {
            "$id": "#/properties/meleeDPS",
            "type": "number",
            "title": "The meleeDPS schema",
            "description": "An explanation about the purpose of this instance.",
            "default": 0.0,
            "examples": [
                0.96
            ]
        },
        "spellDPS": {
            "$id": "#/properties/spellDPS",
            "type": "number",
            "title": "The spellDPS schema",
            "description": "An explanation about the purpose of this instance.",
            "default": 0.0,
            "examples": [
                0.0
            ]
        },
        "totalDPS": {
            "$id": "#/properties/totalDPS",
            "type": "number",
            "title": "The totalDPS schema",
            "description": "An explanation about the purpose of this instance.",
            "default": 0.0,
            "examples": [
                0.96
            ]
        }
    },
    "additionalProperties": false
}