const baseJSON = {
    "iksarOrTroll": false,
    "beginLevel": 1,
    "endLevel": 19,
    "sitting": 2,
    "rested": 2,
    "feigned": 1,
    "standing": 1,
    "hungry": 0
}

exports.regenSchema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$id": "http://example.com/example.json",
    "type": "object",
    "title": "The root schema",
    "description": "The root schema comprises the entire JSON document.",
    "default": {},
    "examples": [
        {
            "iksarOrTroll": false,
            "beginLevel": 1,
            "endLevel": 19,
            "sitting": 2,
            "rested": 2,
            "feigned": 1,
            "standing": 1,
            "hungry": 0
        }
    ],
    "required": [],
    "properties": {
        "iksarOrTroll": {
            "$id": "#/properties/iksarOrTroll",
            "type": "boolean",
            "title": "The iksarOrTroll schema",
            "description": "An explanation about the purpose of this instance.",
            "default": false,
            "examples": [
                false
            ]
        },
        "beginLevel": {
            "$id": "#/properties/beginLevel",
            "type": "integer",
            "title": "The beginLevel schema",
            "description": "An explanation about the purpose of this instance.",
            "default": 0,
            "examples": [
                1
            ]
        },
        "endLevel": {
            "$id": "#/properties/endLevel",
            "type": "integer",
            "title": "The endLevel schema",
            "description": "An explanation about the purpose of this instance.",
            "default": 0,
            "examples": [
                19
            ]
        },
        "sitting": {
            "$id": "#/properties/sitting",
            "type": "integer",
            "title": "The sitting schema",
            "description": "An explanation about the purpose of this instance.",
            "default": 0,
            "examples": [
                2
            ]
        },
        "rested": {
            "$id": "#/properties/rested",
            "type": "integer",
            "title": "The rested schema",
            "description": "An explanation about the purpose of this instance.",
            "default": 0,
            "examples": [
                2
            ]
        },
        "feigned": {
            "$id": "#/properties/feigned",
            "type": "integer",
            "title": "The feigned schema",
            "description": "An explanation about the purpose of this instance.",
            "default": 0,
            "examples": [
                1
            ]
        },
        "standing": {
            "$id": "#/properties/standing",
            "type": "integer",
            "title": "The standing schema",
            "description": "An explanation about the purpose of this instance.",
            "default": 0,
            "examples": [
                1
            ]
        },
        "hungry": {
            "$id": "#/properties/hungry",
            "type": "integer",
            "title": "The hungry schema",
            "description": "An explanation about the purpose of this instance.",
            "default": 0,
            "examples": [
                0
            ]
        }
    },
    "additionalProperties": false
}