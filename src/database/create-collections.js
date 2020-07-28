// const { regenSchema } = require('./regen-schema')
// const { combatSchema } = require('./schemas/combat-schema')
// const { battleSchema } = require('./schemas/battle-schema')
// const { entitySchema } = require('./schemas/entity-schema')
// const { playerSchema } = require('./schemas/player-schema')

// Maybe later improve this
const schemas = [
    { regenSchema } = require('./regen-schema'),
    { combatSchema } = require('./schemas/combat-schema'), 
    { battleSchema } = require('./schemas/battle-schema'), 
    { entitySchema } = require('./schemas/entity-schema'),
    { playerSchema } = require('./schemas/player-schema')

]

const { insertRegenDefaults } = require('./regen-defaults')
const { insertEntityDefaults } = require('./entity-defaults')
// await database.collection({
//     name: 'collection_name',
//     schema: collectionSchema,
//     // pouchSettings: {} // (optional)
//     // statics: {}, // (optional) // ORM-functions for this collection
//     // methods: {}, // (optional) ORM-functions for documents
//     // attachments: {}, // (optional) ORM-functions for attachments
//     // options: {}, // (optional) Custom paramters that might be used in plugins
//     // migrationStrategies: {}, // (optional)
//     // autoMigrate: true, // (optional)
//     // cacheReplacementPolicy: function () { }, // (optional) custoom cache replacement policy
// });

exports.createCollections = async database => {
    for (const schema of schemas) {
        await database.collection({
            name: schema.title,
            schema: schema.schema,
            statics: schema.statics, // (optional) // ORM-functions for this collection
            methods: schema.methods, // (optional) ORM-functions for documents
            // pouchSettings: {}, // (optional)
            // attachments: {}, // (optional) ORM-functions for attachments
            // options: {}, // (optional) Custom paramters that might be used in plugins
            // migrationStrategies: {}, // (optional) functions to use to migrate to new versions
            // autoMigrate: true, // (optional)
        })
    }
}

exports.insertDefaults = async database => {
    await insertRegenDefaults(database)
    await insertEntityDefaults(database)
}

