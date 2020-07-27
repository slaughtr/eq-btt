const dayjs = require('dayjs')
const { default: ShortUniqueId } = require('short-unique-id');
const uid = new ShortUniqueId();

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
            "description": "Unix epoch seconds timestamp indicating when battle recording began",
            "default": dayjs().valueOf(),
            "examples": [
                1595808387
            ]
        },
        "end": {
            "type": "integer",
            "title": "end schema",
            "description": "Unix epoch seconds timestamp indicating when battle recording began",
            "examples": [
                1595808402
            ]
        },
        "length": {
            "type": "integer",
            "title": "length schema",
            "description": "Duration of battle in seconds",
            "examples": [
                35
            ]
        },
        "player": {
            "type": "object",
            "ref": "player"
        },
        "combats": {
            "type": "array",
            "title": "combats schema",
            "description": "Array of combat objects that ocurred during this battle",
            "ref": "combat",
            "items": { 
                "type": "object" 
            }
        },
        "others": {
            "type": "array",
            "ref": "entity",
            "title": "others schema",
            "description": "Array of entities that were involved other than the player",
            "default": [],
            "items": {
                "type": "object"
            }
        }
    },
    "indexes": [
        "player", "others.[].id"
    ]
}