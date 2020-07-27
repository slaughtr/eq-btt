const baseJson = {
    "id": 1,
    "start": 1595808387,
    "end": 1595808402,
    "length": 25,
    "player": {
        "type": "object",
        "ref": "player"
    },
    "combats": [
        {
            "type": "object",
            "ref": "combat"
        }
    ],
    "playerOverallDPS": 2.00,
    "others": [
        {
            "type": "object",
            "ref": "entity"
        }
    ]
}

exports.combatSchema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$id": "http://example.com/example.json",
    "type": "object",
    "title": "The root schema",
    "description": "The root schema comprises the entire JSON document.",
    "default": {},
    "examples": [
        {
            "id": 1,
            "start": 1595808387,
            "end": 1595808402,
            "length": 25,
            "player": "Dreadsnot",
            "combats": [
                {
                    "start": 1595808387,
                    "end": 1595808402,
                    "length": 35,
                    "by": "an orc pawn",
                    "to": "Dreadsnot",
                    "meleeDamage": 24,
                    "spellDamage": 0,
                    "totalDamage": 24,
                    "meleeDPS": 0.96,
                    "spellDPS": 0.0,
                    "totalDPS": 0.96
                },
                {
                    "start": 1595808387,
                    "end": 1595808402,
                    "length": 35,
                    "by": "an orc pawn",
                    "to": "Dreadsnot",
                    "meleeDamage": 39,
                    "spellDamage": 11,
                    "totalDamage": 50,
                    "meleeDPS": 1.56,
                    "spellDPS": 0.44,
                    "totalDPS": 2.0
                },
                {
                    "start": 1595808387,
                    "end": 1595808402,
                    "length": 35,
                    "by": "an orc pawn",
                    "to": "Dreadsnot",
                    "meleeDamage": 24,
                    "spellDamage": 0,
                    "totalDamage": 24,
                    "meleeDPS": 0.96,
                    "spellDPS": 0.0,
                    "totalDPS": 0.96
                }
            ],
            "playerOverallDPS": 2.0,
            "others": [
                "an orc pawn",
                "Zonartik"
            ]
        }
    ],
    "required": [],
    "properties": {
        "id": {
            "$id": "#/properties/id",
            "type": "integer",
            "title": "The id schema",
            "description": "An explanation about the purpose of this instance.",
            "default": 0,
            "examples": [
                1
            ]
        },
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
                25
            ]
        },
        "player": {
            "$id": "#/properties/player",
            "ref": "character", // https://rxdb.info/population.html
            "type": "object",
            "ref": "player",
            "title": "The player schema",
            "description": "An explanation about the purpose of this instance.",
        },
        "combats": {
            "$id": "#/properties/combats",
            "type": "array",
            "title": "The combats schema",
            "description": "An explanation about the purpose of this instance.",
            "ref": "combat",
            "items": { "type": "object" }
        },
        "playerOverallDPS": {
            "$id": "#/properties/playerOverallDPS",
            "type": "number",
            "title": "The playerOverallDPS schema",
            "description": "An explanation about the purpose of this instance.",
            "default": 0.0,
            "examples": [
                2.0
            ]
        },
        "others": {
            "$id": "#/properties/others",
            "type": "array",
            "ref": "entity",
            "title": "The others schema",
            "description": "An explanation about the purpose of this instance.",
            "default": [],
            "examples": [
                [
                    "an orc pawn",
                    "Zonartik"
                ]
            ],
            "additionalItems": false,
            "items": {
                "type": "object"
            }
        }
    },
    "additionalProperties": false
}