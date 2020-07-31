// Used this + https://www.jsonschema.net/home to make schema
const baseJSON = {
    iksarOrTroll: false,
    beginLevel: 1,
    endLevel: 19,
    sitting: 2,
    rested: 2,
    feigned: 1,
    standing: 1,
    hungry: 0
}

exports.regenSchema = {
    collectionName: 'regen',
    statics: {
        getRegen(iksarOrTroll, level) {
            return this.findOne({
                iksarOrTroll: iksarOrTroll,
                $and: [
                    { beginLevel: { $gte: level } },
                    { $endlevel: { $lte: level } }
                ]
            })
        }
    }, // (optional) // ORM-functions for this collection
    methods: {}, // (optional) ORM-functions for documents
    schema: {
        // "schema: "http://json-schema.org/draft-07/schema",
        version: 0,
        type: 'object',
        title: 'regen',
        description: 'Describes the regen document',
        // examples: [
        //     {
        //         iksarOrTroll: false,
        //         beginLevel: 1,
        //         endLevel: 19,
        //         sitting: 2,
        //         rested: 2,
        //         feigned: 1,
        //         standing: 1,
        //         hungry: 0
        //     }
        // ],
        required: ['iksarOrTroll', 'beginLevel', 'endLevel', 'sitting', 'rested', 'feigned', 'standing', 'hungry'],
        properties: {
            iksarOrTroll: {
                type: 'boolean',
                // title: "iksarOrTroll schema",
                // description: "Boolean indicating whether the regen object is for Iksars and/or Trolls",
                // examples: [
                //     false, true
                // ]
            },
            beginLevel: {
                type: 'integer',
                // title: "beginLevel schema",
                // description: "The level regen begins to be these values",
                // examples: [
                //     1, 20, 50, 51, 56, 60, 61, 63, 65
                // ]
            },
            endLevel: {
                type: 'integer',
                // title: "endLevel schema",
                // description: "The level regen ends being these values",
                // examples: [
                //     19, 49, 50, 55, 59, 60, 62, 64, 65
                // ]
            },
            sitting: {
                type: 'integer',
                // title: "sitting schema",
                // description: "Amount of regen while sitting",
                // examples: [
                //     2
                // ]
            },
            rested: {
                type: 'integer',
                // title: "The rested schema",
                // description: "Amount of regen while rested",
                // examples: [
                //     2
                // ]
            },
            feigned: {
                type: 'integer',
                // title: "feigned schema",
                // description: "Amount of regen while feigned",
                // examples: [
                //     1
                // ]
            },
            standing: {
                type: 'integer',
                // title: "standing schema",
                // description: "Amount of regen while standing",
                // examples: [
                //     1
                // ]
            },
            hungry: {
                type: 'integer',
                // title: "hungry schema",
                // description: "Amount of regen while hungry",
                // examples: [
                //     0
                // ]
            }
        },
        indexes: [
            'beginLevel', 'endLevel'
        ]
    }
}