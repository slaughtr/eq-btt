const baseJson = {
    "id": 1,
    "start": 1595808387,
    "end": 1595808402,
    "length": 25,
    "player": "Dreadsnot",
    "breakdown": [{
        "start": 1595808387,
        "end": 1595808402,
        "length": 35,
        "by": "an orc pawn",
        "to": "Dreadsnot",
        "meleeDamage": 24,
        "spellDamage": 0,
        "totalDamage": 24,
        "meleeDPS": 0.96,
        "spellDPS": 0.00,
        "totalDPS": 0.96
    }, {
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
        "totalDPS": 2.00
    }, {
        "start": 1595808387,
        "end": 1595808402,
        "length": 35,
        "by": "an orc pawn",
        "to": "Dreadsnot",
        "meleeDamage": 24,
        "spellDamage": 0,
        "totalDamage": 24,
        "meleeDPS": 0.96,
        "spellDPS": 0.00,
        "totalDPS": 0.96
    }],
    "playerOverallDPS": 2.00,
    "others": ["an orc pawn", "Zonartik"]
}

exports.combatSchema = `{
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
            "breakdown": [
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
            "type": "string",
            "title": "The player schema",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
                "Dreadsnot"
            ]
        },
        "breakdown": {
            "$id": "#/properties/breakdown",
            "type": "array",
            "title": "The breakdown schema",
            "description": "An explanation about the purpose of this instance.",
            "default": [],
            "examples": [
                [
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
                    }
                ]
            ],
            "additionalItems": false,
            "items": {
                "$id": "#/properties/breakdown/items",
                "anyOf": [
                    {
                        "$id": "#/properties/breakdown/items/anyOf/0",
                        "type": "object",
                        "title": "The first anyOf schema",
                        "description": "An explanation about the purpose of this instance.",
                        "default": {},
                        "examples": [
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
                        "required": [],
                        "properties": {
                            "start": {
                                "$id": "#/properties/breakdown/items/anyOf/0/properties/start",
                                "type": "integer",
                                "title": "The start schema",
                                "description": "An explanation about the purpose of this instance.",
                                "default": 0,
                                "examples": [
                                    1595808387
                                ]
                            },
                            "end": {
                                "$id": "#/properties/breakdown/items/anyOf/0/properties/end",
                                "type": "integer",
                                "title": "The end schema",
                                "description": "An explanation about the purpose of this instance.",
                                "default": 0,
                                "examples": [
                                    1595808402
                                ]
                            },
                            "length": {
                                "$id": "#/properties/breakdown/items/anyOf/0/properties/length",
                                "type": "integer",
                                "title": "The length schema",
                                "description": "An explanation about the purpose of this instance.",
                                "default": 0,
                                "examples": [
                                    35
                                ]
                            },
                            "by": {
                                "$id": "#/properties/breakdown/items/anyOf/0/properties/by",
                                "type": "string",
                                "title": "The by schema",
                                "description": "An explanation about the purpose of this instance.",
                                "default": "",
                                "examples": [
                                    "an orc pawn"
                                ]
                            },
                            "to": {
                                "$id": "#/properties/breakdown/items/anyOf/0/properties/to",
                                "type": "string",
                                "title": "The to schema",
                                "description": "An explanation about the purpose of this instance.",
                                "default": "",
                                "examples": [
                                    "Dreadsnot"
                                ]
                            },
                            "meleeDamage": {
                                "$id": "#/properties/breakdown/items/anyOf/0/properties/meleeDamage",
                                "type": "integer",
                                "title": "The meleeDamage schema",
                                "description": "An explanation about the purpose of this instance.",
                                "default": 0,
                                "examples": [
                                    24
                                ]
                            },
                            "spellDamage": {
                                "$id": "#/properties/breakdown/items/anyOf/0/properties/spellDamage",
                                "type": "integer",
                                "title": "The spellDamage schema",
                                "description": "An explanation about the purpose of this instance.",
                                "default": 0,
                                "examples": [
                                    0
                                ]
                            },
                            "totalDamage": {
                                "$id": "#/properties/breakdown/items/anyOf/0/properties/totalDamage",
                                "type": "integer",
                                "title": "The totalDamage schema",
                                "description": "An explanation about the purpose of this instance.",
                                "default": 0,
                                "examples": [
                                    24
                                ]
                            },
                            "meleeDPS": {
                                "$id": "#/properties/breakdown/items/anyOf/0/properties/meleeDPS",
                                "type": "number",
                                "title": "The meleeDPS schema",
                                "description": "An explanation about the purpose of this instance.",
                                "default": 0.0,
                                "examples": [
                                    0.96
                                ]
                            },
                            "spellDPS": {
                                "$id": "#/properties/breakdown/items/anyOf/0/properties/spellDPS",
                                "type": "number",
                                "title": "The spellDPS schema",
                                "description": "An explanation about the purpose of this instance.",
                                "default": 0.0,
                                "examples": [
                                    0.0
                                ]
                            },
                            "totalDPS": {
                                "$id": "#/properties/breakdown/items/anyOf/0/properties/totalDPS",
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
                ]
            }
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
                "$id": "#/properties/others/items",
                "anyOf": [
                    {
                        "$id": "#/properties/others/items/anyOf/0",
                        "type": "string",
                        "title": "The first anyOf schema",
                        "description": "An explanation about the purpose of this instance.",
                        "default": "",
                        "examples": [
                            "an orc pawn",
                            "Zonartik"
                        ]
                    }
                ]
            }
        }
    },
    "additionalProperties": false
}`