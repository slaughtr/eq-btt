const dayjs = require('dayjs')

// Used this + https://www.jsonschema.net/home to make schema
const baseJSON = {
    "start": 1595808387,
    "end": 1595808402,
    "length": 35,
    "attacker": {
        "type": "object",
        "ref": "entity"
    },
    "target": {
        "type": "object",
        "ref": "entity"
    },
    "meleeDamage": 24,
    "spellDamage": 0,
    "totalDamage": 24,
    "meleeDPS": 0.96,
    "spellDPS": 0.00,
    "totalDPS": 0.96
}

exports.combatSchema = {
    // "$schema": "http://json-schema.org/draft-07/schema",
    version: 0,
    type: "object",
    title: "combat schema",
    description: "Describes the combat document",
    // examples: [
    //     {
    //         start: 1595808387,
    //         end: 1595808402,
    //         length: 35,
    //         attacker: {
    //             type: "object",
    //             ref: "entity"
    //         },
    //         target: {
    //             type: "object",
    //             ref: "entity"
    //         },
    //         meleeDamage: 24,
    //         spellDamage: 0,
    //         totalDamage: 24,
    //         meleeDPS: 0.96,
    //         spellDPS: 0.0,
    //         totalDPS: 0.96
    //     }
    // ],
    required: [ "attacker", "target", "meleeDamage", "spellDamage", "totalDamage"],
    properties: {
        start: {
            type: "integer",
            default: dayjs().valueOf(),
            // title: "start schema",
            // description: "Unix epoch seconds timestamp indicating when recording began for this combat",
            // examples: [
            //     1595808387
            // ]
        },
        end: {
            type: "integer",
            // title: "end schema",
            // description: "Unix epoch seconds timestamp indicating when recording began for this combat",
            // examples: [
            //     1595808402
            // ]
        },
        length: {
            type: "integer",
            // title: "length schema",
            // description: "Duration of combat in seconds",
            // examples: [
            //     35
            // ]
        },
        attacker: {
            type: "object",
            ref: "entity"
        },
        target: {
            type: "object",
            ref: "entity"
        },
        meleeDamage: {
            type: "integer",
            default: 0,
            // title: "meleeDamage schema",
            // description: "Total melee damage recorded by attacker against target",
            // examples: [
            //     24
            // ]
        },
        spellDamage: {
            type: "integer",
            default: 0,
            // title: "spellDamage schema",
            // description: "Total spell and damage shield damage recorded by attacker against target",
            // examples: [
            //     0
            // ]
        },
        totalDamage: {
            type: "integer",
            default: 0,
            // title: "totalDamage schema",
            // description: "Total damage from all sources recorded by attacker against target. spellDamage + meleeDamage",
            // examples: [
            //     24
            // ]
        },
        meleeDPS: {
            type: "number",
            default: 0.0,
            // title: "meleeDPS schema",
            // description: "Total DPS recorded for combat. meleeDamage / length",
            // examples: [
            //     0.96
            // ]
        },
        spellDPS: {
            type: "number",
            default: 0.0,
            // title: "spellDPS schema",
            // description: "Total DPS recorded for combat. spellDamage / length",
            // examples: [
            //     0.0
            // ]
        },
        totalDPS: {
            type: "number",
            default: 0.0,
            // title: "totalDPS schema",
            // description: "Total DPS recorded for combat. totalDamage / length",
            // examples: [
            //     0.96
            // ]
        }
    },
    indexes: [
        "to",
        "from"
    ]
}