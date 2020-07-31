const dayjs = require('dayjs')

// Used this + https://www.jsonschema.net/home to make schema
const baseJson = {
    'start': 1595808387,
    'end': 1595808402,
    'length': 25,
    'player': {
        'type': 'object',
        'ref': 'player'
    },
    'combats': [
        {
            'type': 'object',
            'ref': 'combat'
        }
    ],
    'others': [
        {
            'type': 'object',
            'ref': 'entity'
        }
    ]
}

exports.battleSchema = {
    collectionName: 'battle',
    statics: {}, // (optional) // ORM-functions for this collection
    methods: {}, // (optional) ORM-functions for documents
    schema: {
        // "schema: "http://json-schema.org/draft-07/schema",
        version: 0,
        type: 'object',
        title: 'battle',
        description: 'Describes the battle document',
        // examples: [
        //     {
        //         start: 1595808387,
        //         end: 1595808402,
        //         length: 25,
        //         player: {
        //             type: "object",
        //             ref: "player"
        //         },
        //         combats: [
        //             {
        //                 type: "object",
        //                 ref: "combat"
        //             }
        //         ],
        //         others: [
        //             {
        //                 type: "object",
        //                 ref: "entity"
        //             }
        //         ]
        //     }
        // ],
        required: ['start', 'end', 'others'],
        properties: {
            start: {
                type: 'integer',
                default: dayjs().valueOf(),
                // title: "start schema",
                // description: "Unix epoch seconds timestamp indicating when battle recording began",
                // examples: [
                //     1595808387
                // ]
            },
            end: {
                type: 'integer',
                // title: "end schema",
                // description: "Unix epoch seconds timestamp indicating when battle recording began",
                // examples: [
                //     1595808402
                // ]
            },
            length: {
                type: 'integer',
                // title: "length schema",
                // description: "Duration of battle in seconds",
                // examples: [
                //     35
                // ]
            },
            player: {
                type: 'string',
                ref: 'player'
            },
            combats: {
                type: 'array',
                ref: 'combat',
                items: {
                    type: 'string'
                }
            },
            others: {
                type: 'array',
                ref: 'entity',
                default: [],
                items: {
                    type: 'string'
                }
            }
        },
        indexes: ['player', 'others.[]', 'combats.[]']
    }
}