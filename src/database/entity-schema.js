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
    // schema: "http://json-schema.org/draft-07/schema",
    version: 0,
    type: "object",
    title: "entity schema",
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