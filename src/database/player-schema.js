const baseJSON = {
    "id": 1,
    "name": "Dreadsnot",
    "level": 19,
    "class": 5,
    "race": 10,
    "hp": {
        "current": 778,
        "max": 778
    },
    "mana": {
        "current": 778,
        "max": 778
    },
    "regen": {
        "iksarOrTroll": false,
        "beginLevel": 1,
        "endLevel": 19,
        "sitting": 2,
        "rested": 2,
        "feigned": 1,
        "standing": 1,
        "hungry": 0
    },
    "pet": {
        "name": "Soandso"
    },
    "zone": "unrest",
    "loc": {
        "x": 1,
        "y": 1,
        "z": 1
    },
    "heading": "NorthWest",
    "stats": {
        "STR": 123,
        "STA": 123,
        "AGI": 123,
        "DEX": 123,
        "INT": 123,
        "WIS": 123,
        "CHA": 123,
        "RES": {
            "magic": 25,
            "poison": 25,
            "disease": 25,
            "fire": 25,
            "cold": 25
        }

    }
}


exports.playerSchema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$id": "http://example.com/example.json",
    "type": "object",
    "title": "The root schema",
    "description": "The root schema comprises the entire JSON document.",
    "default": {},
    "examples": [
        {
            "id": 1,
            "name": "Dreadsnot",
            "level": 19,
            "class": 5,
            "race": 10,
            "hp": {
                "current": 778,
                "max": 778
            },
            "mana": {
                "current": 778,
                "max": 778
            },
            "regen": {
                "iksarOrTroll": false,
                "beginLevel": 1,
                "endLevel": 19,
                "sitting": 2,
                "rested": 2,
                "feigned": 1,
                "standing": 1,
                "hungry": 0
            },
            "pet": {
                "name": "Soandso"
            },
            "zone": "unrest",
            "loc": {
                "x": 1,
                "y": 1,
                "z": 1
            },
            "heading": "NorthWest",
            "stats": {
                "STR": 123,
                "STA": 123,
                "AGI": 123,
                "DEX": 123,
                "INT": 123,
                "WIS": 123,
                "CHA": 123,
                "RES": {
                    "magic": 25,
                    "poison": 25,
                    "disease": 25,
                    "fire": 25,
                    "cold": 25
                }
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
                "Dreadsnot"
            ]
        },
        "level": {
            "$id": "#/properties/level",
            "type": "integer",
            "title": "The level schema",
            "description": "An explanation about the purpose of this instance.",
            "default": 0,
            "examples": [
                19
            ]
        },
        "class": {
            "$id": "#/properties/class",
            "type": "integer",
            "title": "The class schema",
            "description": "An explanation about the purpose of this instance.",
            "default": 0,
            "examples": [
                5
            ]
        },
        "race": {
            "$id": "#/properties/race",
            "type": "integer",
            "title": "The race schema",
            "description": "An explanation about the purpose of this instance.",
            "default": 0,
            "examples": [
                10
            ]
        },
        "hp": {
            "$id": "#/properties/hp",
            "type": "object",
            "title": "The hp schema",
            "description": "An explanation about the purpose of this instance.",
            "default": {},
            "examples": [
                {
                    "current": 778,
                    "max": 778
                }
            ],
            "required": [],
            "properties": {
                "current": {
                    "$id": "#/properties/hp/properties/current",
                    "type": "integer",
                    "title": "The current schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": 0,
                    "examples": [
                        778
                    ]
                },
                "max": {
                    "$id": "#/properties/hp/properties/max",
                    "type": "integer",
                    "title": "The max schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": 0,
                    "examples": [
                        778
                    ]
                }
            },
            "additionalProperties": false
        },
        "mana": {
            "$id": "#/properties/mana",
            "type": "object",
            "title": "The mana schema",
            "description": "An explanation about the purpose of this instance.",
            "default": {},
            "examples": [
                {
                    "current": 778,
                    "max": 778
                }
            ],
            "required": [],
            "properties": {
                "current": {
                    "$id": "#/properties/mana/properties/current",
                    "type": "integer",
                    "title": "The current schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": 0,
                    "examples": [
                        778
                    ]
                },
                "max": {
                    "$id": "#/properties/mana/properties/max",
                    "type": "integer",
                    "title": "The max schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": 0,
                    "examples": [
                        778
                    ]
                }
            },
            "additionalProperties": false
        },
        "regen": {
            "type": "object",
            "ref": "regen"
        },
        "pet": {
            "$id": "#/properties/pet",
            "type": "object",
            "title": "The pet schema",
            "description": "An explanation about the purpose of this instance.",
            "default": {},
            "examples": [
                {
                    "name": "Soandso"
                }
            ],
            "required": [],
            "properties": {
                "name": {
                    "$id": "#/properties/pet/properties/name",
                    "type": "string",
                    "title": "The name schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": "",
                    "examples": [
                        "Soandso"
                    ]
                }
            },
            "additionalProperties": false
        },
        "zone": {
            "$id": "#/properties/zone",
            "type": "string",
            "title": "The zone schema",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
                "unrest"
            ]
        },
        "loc": {
            "$id": "#/properties/loc",
            "type": "object",
            "title": "The loc schema",
            "description": "An explanation about the purpose of this instance.",
            "default": {},
            "examples": [
                {
                    "x": 1,
                    "y": 1,
                    "z": 1
                }
            ],
            "required": [],
            "properties": {
                "x": {
                    "$id": "#/properties/loc/properties/x",
                    "type": "integer",
                    "title": "The x schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": 0,
                    "examples": [
                        1
                    ]
                },
                "y": {
                    "$id": "#/properties/loc/properties/y",
                    "type": "integer",
                    "title": "The y schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": 0,
                    "examples": [
                        1
                    ]
                },
                "z": {
                    "$id": "#/properties/loc/properties/z",
                    "type": "integer",
                    "title": "The z schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": 0,
                    "examples": [
                        1
                    ]
                }
            },
            "additionalProperties": false
        },
        "heading": {
            "$id": "#/properties/heading",
            "type": "string",
            "title": "The heading schema",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
                "NorthWest"
            ]
        },
        "stats": {
            "$id": "#/properties/stats",
            "type": "object",
            "title": "The stats schema",
            "description": "An explanation about the purpose of this instance.",
            "default": {},
            "examples": [
                {
                    "STR": 123,
                    "STA": 123,
                    "AGI": 123,
                    "DEX": 123,
                    "INT": 123,
                    "WIS": 123,
                    "CHA": 123,
                    "RES": {
                        "magic": 25,
                        "poison": 25,
                        "disease": 25,
                        "fire": 25,
                        "cold": 25
                    }
                }
            ],
            "required": [],
            "properties": {
                "STR": {
                    "$id": "#/properties/stats/properties/STR",
                    "type": "integer",
                    "title": "The STR schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": 0,
                    "examples": [
                        123
                    ]
                },
                "STA": {
                    "$id": "#/properties/stats/properties/STA",
                    "type": "integer",
                    "title": "The STA schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": 0,
                    "examples": [
                        123
                    ]
                },
                "AGI": {
                    "$id": "#/properties/stats/properties/AGI",
                    "type": "integer",
                    "title": "The AGI schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": 0,
                    "examples": [
                        123
                    ]
                },
                "DEX": {
                    "$id": "#/properties/stats/properties/DEX",
                    "type": "integer",
                    "title": "The DEX schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": 0,
                    "examples": [
                        123
                    ]
                },
                "INT": {
                    "$id": "#/properties/stats/properties/INT",
                    "type": "integer",
                    "title": "The INT schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": 0,
                    "examples": [
                        123
                    ]
                },
                "WIS": {
                    "$id": "#/properties/stats/properties/WIS",
                    "type": "integer",
                    "title": "The WIS schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": 0,
                    "examples": [
                        123
                    ]
                },
                "CHA": {
                    "$id": "#/properties/stats/properties/CHA",
                    "type": "integer",
                    "title": "The CHA schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": 0,
                    "examples": [
                        123
                    ]
                },
                "RES": {
                    "$id": "#/properties/stats/properties/RES",
                    "type": "object",
                    "title": "The RES schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": {},
                    "examples": [
                        {
                            "magic": 25,
                            "poison": 25,
                            "disease": 25,
                            "fire": 25,
                            "cold": 25
                        }
                    ],
                    "required": [],
                    "properties": {
                        "magic": {
                            "$id": "#/properties/stats/properties/RES/properties/magic",
                            "type": "integer",
                            "title": "The magic schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": 0,
                            "examples": [
                                25
                            ]
                        },
                        "poison": {
                            "$id": "#/properties/stats/properties/RES/properties/poison",
                            "type": "integer",
                            "title": "The poison schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": 0,
                            "examples": [
                                25
                            ]
                        },
                        "disease": {
                            "$id": "#/properties/stats/properties/RES/properties/disease",
                            "type": "integer",
                            "title": "The disease schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": 0,
                            "examples": [
                                25
                            ]
                        },
                        "fire": {
                            "$id": "#/properties/stats/properties/RES/properties/fire",
                            "type": "integer",
                            "title": "The fire schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": 0,
                            "examples": [
                                25
                            ]
                        },
                        "cold": {
                            "$id": "#/properties/stats/properties/RES/properties/cold",
                            "type": "integer",
                            "title": "The cold schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": 0,
                            "examples": [
                                25
                            ]
                        }
                    },
                    "additionalProperties": false
                }
            },
            "additionalProperties": false
        }
    },
    "additionalProperties": false
}