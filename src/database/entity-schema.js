const { default: ShortUniqueId } = require('short-unique-id');
const uid = new ShortUniqueId();

// Used this + https://www.jsonschema.net/home to make schema
const baseJSON = {
    "id": 'asdfEF',
    "name": "an orc pawn",
    "battles": [{
        "ref": "battle",
        "type": "object"
    }],
    "player": {
        "ref": "player",
        "type": "object"
    }
}

exports.entitySchema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$id": "http://example.com/example.json",
    "type": "object",
    "title": "entity schema",
    "description": "Describes the entity document",
    "examples": [
        {
            "id": "asdfEF",
            "name": "an orc pawn",
            "battles": [
                {
                    "ref": "battle",
                    "type": "object"
                }
            ],
            "player": {
                "ref": "player",
                "type": "object"
            }
        }
    ],
    "required": ["id", "name"],
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
        "name": {
            "type": "string",
            "title": "name schema",
            "description": "The name of the entity as parsed from the logs",
            "examples": [
                "an orc pawn"
            ]
        },
        "battles": {
            type: 'array',
            ref: 'battle',
            items: {
                type: 'object'
            },
            "player": {
                "ref": "player",
                "type": "object"
            }
        },
        "indexes": [ "id", "name", "battles.[].id", "player.[].id"]
    }
}