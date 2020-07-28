// Used this + https://www.jsonschema.net/home to make schema
const baseJSON = {
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
    collectionName: 'entity',
    statics: {}, // (optional) // ORM-functions for this collection
    methods: {
        addBattle(battle) {
            this.battles.push(battle)
        },
        makePlayer(player, force) {
            if (this.player && !force) console.error('Entity is already player!', entity, player)
            else this.player = player
            return this._id
        }
    }, // (optional) ORM-functions for documents
    schema: {
        // schema: "http://json-schema.org/draft-07/schema",
        version: 0,
        type: "object",
        title: "entity",
        description: "Describes the entity document",
        // examples: [
        //     {
        //         name: "an orc pawn",
        //         battles: [
        //             {
        //                 ref: "battle",
        //                 type: "object"
        //             }
        //         ],
        //         player: {
        //             ref: "player",
        //             type: "object"
        //         }
        //     }
        // ],
        properties: {
            name: {
                type: "string",
                primary: true
                // title: "name schema",
                // description: "The name of the entity as parsed from the logs",
                // examples: [
                //     "an orc pawn"
                // ]
            },
            battles: {
                type: 'array',
                ref: 'battle',
                items: {
                    type: 'object'
                },
            },
            player: {
                ref: "player",
                type: "object"
            },
            indexes: ["battles.[]._id", "player.[]._id"]
        }
    }
}