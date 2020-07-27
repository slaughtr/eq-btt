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
        "RESISTS": {
            "magic": 25,
            "poison": 25,
            "disease": 25,
            "fire": 25,
            "cold": 25
        }

    }
}


exports.characterSchema = `{
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
                "RESISTS": {
                    "magic": 25,
                    "poison": 25,
                    "disease": 25,
                    "fire": 25,
                    "cold": 25
                }
            }
        }
    ],
    "required": [
        "id",
        "name",
        "level",
        "class",
        "race",
        "hp",
        "mana",
        "regen",
        "pet",
        "zone",
        "loc",
        "heading",
        "stats"
    ],
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
            "required": [
                "current",
                "max"
            ],
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
            "required": [
                "current",
                "max"
            ],
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
            "$id": "#/properties/regen",
            "type": "object",
            "title": "The regen schema",
            "description": "An explanation about the purpose of this instance.",
            "default": {},
            "examples": [
                {
                    "sitting": 2,
                    "rested": 2,
                    "feigned": 1,
                    "standing": 1,
                    "hungry": 0
                }
            ],
            "required": [
                "sitting",
                "rested",
                "feigned",
                "standing",
                "hungry"
            ],
            "properties": {
                "sitting": {
                    "$id": "#/properties/regen/properties/sitting",
                    "type": "integer",
                    "title": "The sitting schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": 0,
                    "examples": [
                        2
                    ]
                },
                "rested": {
                    "$id": "#/properties/regen/properties/rested",
                    "type": "integer",
                    "title": "The rested schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": 0,
                    "examples": [
                        2
                    ]
                },
                "feigned": {
                    "$id": "#/properties/regen/properties/feigned",
                    "type": "integer",
                    "title": "The feigned schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": 0,
                    "examples": [
                        1
                    ]
                },
                "standing": {
                    "$id": "#/properties/regen/properties/standing",
                    "type": "integer",
                    "title": "The standing schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": 0,
                    "examples": [
                        1
                    ]
                },
                "hungry": {
                    "$id": "#/properties/regen/properties/hungry",
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
            "required": [
                "name"
            ],
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
            "required": [
                "x",
                "y",
                "z"
            ],
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
                    "RESISTS": {
                        "magic": 25,
                        "poison": 25,
                        "disease": 25,
                        "fire": 25,
                        "cold": 25
                    }
                }
            ],
            "required": [
                "STR",
                "STA",
                "AGI",
                "DEX",
                "INT",
                "WIS",
                "CHA",
                "RESISTS"
            ],
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
                "RESISTS": {
                    "$id": "#/properties/stats/properties/RESISTS",
                    "type": "object",
                    "title": "The RESISTS schema",
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
                    "required": [
                        "magic",
                        "poison",
                        "disease",
                        "fire",
                        "cold"
                    ],
                    "properties": {
                        "magic": {
                            "$id": "#/properties/stats/properties/RESISTS/properties/magic",
                            "type": "integer",
                            "title": "The magic schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": 0,
                            "examples": [
                                25
                            ]
                        },
                        "poison": {
                            "$id": "#/properties/stats/properties/RESISTS/properties/poison",
                            "type": "integer",
                            "title": "The poison schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": 0,
                            "examples": [
                                25
                            ]
                        },
                        "disease": {
                            "$id": "#/properties/stats/properties/RESISTS/properties/disease",
                            "type": "integer",
                            "title": "The disease schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": 0,
                            "examples": [
                                25
                            ]
                        },
                        "fire": {
                            "$id": "#/properties/stats/properties/RESISTS/properties/fire",
                            "type": "integer",
                            "title": "The fire schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": 0,
                            "examples": [
                                25
                            ]
                        },
                        "cold": {
                            "$id": "#/properties/stats/properties/RESISTS/properties/cold",
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
}`