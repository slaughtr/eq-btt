const {
    addRxPlugin,
    createRxDatabase
} = require('rxdb');
const { regenSchema } = require('./regen-schema')
const { combatSchema } = require('./combat-schema')
const { battleSchema } = require('./battle-schema')
const { entitySchema } = require('./entity-schema')
const { playerSchema } = require('./player-schema')
// Going with websql over leveldb as I assume there will potentially be multiple instances running for boxes
addRxPlugin(require('pouchdb-adapter-node-websql'));


// or use a specific folder to store the data

const run = async () => {
    try {
        const db = await createRxDatabase({
            name: 'eq',
            adapter: 'websql',
            // password: process.env.RXDB_PASSWORD || 'password', // (optional) seems unnecessary for this app
            multiInstance: true, // Allows multiple processes to use the DB together 
            eventReduce: true // seems like a good idea
        });
        // console.dir(db);

        const database = await createRxDatabase({
            name: process.env.RXDB_FILE_LOCATION || './eq',
            adapter: 'websql' // the name of your adapter
        });

        await database.collection({
            name: 'regen',
            schema: regenSchema,
            // pouchSettings: {} // (optional)
            // statics: {}, // (optional) // ORM-functions for this collection
            // methods: {}, // (optional) ORM-functions for documents
            // attachments: {}, // (optional) ORM-functions for attachments
            // options: {}, // (optional) Custom paramters that might be used in plugins
            // migrationStrategies: {}, // (optional)
            // autoMigrate: true, // (optional)
            // cacheReplacementPolicy: function () { }, // (optional) custoom cache replacement policy
        });

        try {
            await database.regen.insert({
                iksarOrTroll: false,
                beginLevel: 1,
                endLevel: 19,
                sitting: 2,
                rested: 2,
                feigned: 1,
                standing: 1,
                hungry: 0
            });
        } catch (error) {
            console.error('insert error')
        }

        const level = 19
        // const docs = await database.regen.findOne()
        // // const docs = await database.regen.findOne({
        // //         selector: {$and: [{beginLevel: {$lte: level}}, {endLevel: {$gte: level}}]}
        // //     })
        //     .exec();

            await database.regen.dump()
            .then(json => console.dir(json));

            // console.log(docs)

    } catch (e) {
        console.error(e)
    }
}

run().then(process.exit)