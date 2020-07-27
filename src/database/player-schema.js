const { default: ShortUniqueId } = require('short-unique-id');
const uid = new ShortUniqueId();

// Used this + https://www.jsonschema.net/home to make schema
const baseJSON = {
    "id": "fJDw89",
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
        "AC": 123,
        "ATK": 123,
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
    "type": "object",
    "title": "player schema",
    "description": "Describes the player document",
    "examples": [
        {
            "id": "fJDw89",
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
                "AC": 123,
                "ATK": 123,
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
            "description": "Name of the player character",
            "examples": [
                "Dreadsnot"
            ]
        },
        "level": {
            "type": "integer",
            "title": "level schema",
            "description": "The player's level",
            "default": 1,
            "examples": [
                19
            ]
        },
        "class": {
            "type": "integer",
            "title": "class schema",
            "description": "Numerical identifier indicating player's class. Uses standard EQ class numbers",
            "default": 1,
            "examples": [
                5
            ]
        },
        "race": {
            "type": "integer",
            "title": "race schema",
            "description": "Numerical identifier indicating player's race. Uses standard EQ race numbers",
            "default": 1,
            "examples": [
                10
            ]
        },
        "hp": {
            "type": "object",
            "title": "hp schema",
            "description": "Object describing player's current and max HP",
            "default": {},
            "examples": [
                {
                    "current": 778,
                    "max": 778
                }
            ],
            "required": ["max"],
            "properties": {
                "current": {
                    "type": "integer",
                    "title": "current HP schema",
                    "description": "Player's current HP",
                    "default": 1,
                    "examples": [
                        778
                    ]
                },
                "max": {
                    "type": "integer",
                    "title": "max HP schema",
                    "description": "Player's maximum HP",
                    "default": 1,
                    "examples": [
                        778
                    ]
                }
            }
        },
        "mana": {
            "type": "object",
            "title": "mana schema",
            "description": "Object describing player's current and max mana",
            "examples": [
                {
                    "current": 778,
                    "max": 778
                }
            ],
            "required": ["max"],
            "properties": {
                "current": {
                    "type": "integer",
                    "title": "current mana schema",
                    "description": "Player's current mana",
                    "examples": [
                        778
                    ]
                },
                "max": {
                    "type": "integer",
                    "title": "max mana schema",
                    "description": "Player's maximum mana",
                    "examples": [
                        778
                    ]
                }
            }
        },
        "regen": {
            "type": "object",
            "ref": "regen"
        },
        "pet": {
            "type": "object",
            "title": "pet schema",
            "description": "Object describing player's pet",
            "examples": [
                {
                    "name": "Soandso"
                }
            ],
            "required": ["name"],
            "properties": {
                "name": {
                    "type": "string",
                    "title": "pet name schema",
                    "description": "The name of the player's pet",
                    "examples": [
                        "Soandso"
                    ]
                }
            }
        },
        // TODO: maybe make a zone schema for pulling in ZEMs?
        "zone": {
            "type": "string",
            "title": "zone schema",
            "description": "Player's last reported. Uses EQ zone short names",
            "examples": [
                "unrest"
            ]
        },
        "loc": {
            "type": "object",
            "title": "loc schema",
            "description": "Player's last reported xyz location",
            "default": {},
            "examples": [
                {
                    "x": 1,
                    "y": 1,
                    "z": 1
                }
            ],
            "required": ["x", "y"],
            "properties": {
                "x": {
                    "type": "integer",
                    "default": 0,
                    "examples": [
                        1
                    ]
                },
                "y": {
                    "type": "integer",
                    "default": 0,
                    "examples": [
                        1
                    ]
                },
                "z": {
                    "type": "integer",
                    "default": 0,
                    "examples": [
                        1
                    ]
                }
            }
        },
        "heading": {
            "type": "string",
            "title": "heading schema",
            "description": "Player's last reported heading as told by Sense Heading",
            "examples": [
                "NorthWest"
            ]
        },
        "stats": {
            "type": "object",
            "title": "stats schema",
            "description": "The player's stats",
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
                    "AC": 123,
                    "ATK": 123,
                    "RES": {
                        "magic": 25,
                        "poison": 25,
                        "disease": 25,
                        "fire": 25,
                        "cold": 25
                    }
                }
            ],
            "properties": {
                "STR": {
                    "type": "integer",
                    "title": "The STR schema",
                    "description": "The player's STR stat",
                    "examples": [
                        123
                    ]
                },
                "STA": {
                    "type": "integer",
                    "title": "The STA schema",
                    "description": "The player's STA stat",
                    "examples": [
                        123
                    ]
                },
                "AGI": {
                    "type": "integer",
                    "title": "The AGI schema",
                    "description": "The player's AGI stat",
                    "examples": [
                        123
                    ]
                },
                "DEX": {
                    "type": "integer",
                    "title": "The DEX schema",
                    "description": "The player's DEX stat",
                    "examples": [
                        123
                    ]
                },
                "INT": {
                    "type": "integer",
                    "title": "The INT schema",
                    "description": "The player's INT stat",
                    "examples": [
                        123
                    ]
                },
                "WIS": {
                    "type": "integer",
                    "title": "The WIS schema",
                    "description": "The player's WIS stat",
                    "examples": [
                        123
                    ]
                },
                "CHA": {
                    "type": "integer",
                    "title": "The CHA schema",
                    "description": "The player's CHA stat",
                    "examples": [
                        123
                    ]
                },
                "AC": {
                    "type": "integer",
                    "title": "The AC schema",
                    "description": "The player's AC stat",
                    "examples": [
                        123
                    ]
                },
                "ATK": {
                    "type": "integer",
                    "title": "The ATK schema",
                    "description": "The player's ATK stat",
                    "examples": [
                        123
                    ]
                },
                "RES": {
                    "type": "object",
                    "title": "The RES schema",
                    "description": "The player's resistane stats",
                    "examples": [
                        {
                            "magic": 25,
                            "poison": 25,
                            "disease": 25,
                            "fire": 25,
                            "cold": 25
                        }
                    ],
                    "properties": {
                        "magic": {
                            "type": "integer",
                            "title": "magic schema",
                            "description": "The player's magic resistance stat",
                            "examples": [
                                25
                            ]
                        },
                        "poison": {
                            "type": "integer",
                            "title": "poison schema",
                            "description": "The player's poison resistance stat",
                            "examples": [
                                25
                            ]
                        },
                        "disease": {
                            "type": "integer",
                            "title": "disease schema",
                            "description": "The player's disease resistance stat",
                            "examples": [
                                25
                            ]
                        },
                        "fire": {
                            "type": "integer",
                            "title": "fire schema",
                            "description": "The player's fire resistance stat",
                            "examples": [
                                25
                            ]
                        },
                        "cold": {
                            "type": "integer",
                            "title": "cold schema",
                            "description": "The player's cold resistance stat",
                            "examples": [
                                25
                            ]
                        }
                    }
                }
            }
        }
    },
    "indexes": ["id", "name"]
}