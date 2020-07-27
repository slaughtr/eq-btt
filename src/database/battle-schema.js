// Used this + https://www.jsonschema.net/home to make schema
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
    "others": [
        {
            "type": "object",
            "ref": "entity"
        }
    ]
}

exports.battleSchema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "type": "object",
    "title": "battle schema",
    "description": "Describes the battle document",
    "examples": [
        {
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
            "playerOverallDPS": 2.0,
            "others": [
                {
                    "type": "object",
                    "ref": "entity"
                }
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
            "decription": "An explanation about the purpose of this instance.",
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