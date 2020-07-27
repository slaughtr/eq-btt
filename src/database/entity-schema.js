const baseJSON = {
    "id": 1,
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
    "title": "The root schema",
    "description": "The root schema comprises the entire JSON document.",
    "default": {},
    "examples": [
        {
            "id": 1,
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
        "name": {
            "$id": "#/properties/name",
            "type": "string",
            "title": "The name schema",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
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
    "additionalProperties": false
}