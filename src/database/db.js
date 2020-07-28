const { addRxPlugin, createRxDatabase } = require('rxdb');
const { createCollections, insertDefaults } = require('./create-collections')
// Going with websql over leveldb as I assume there will potentially be multiple instances running for boxes
addRxPlugin(require('pouchdb-adapter-node-websql'));




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

        // use a specific folder (file name?) to store the data
        // TODO: better handlindg of DB file
        const database = await createRxDatabase({
            name: process.env.RXDB_FILE_LOCATION || './eq/',
            adapter: 'websql'
        });
        
        await createCollections(database)

        await insertDefaults(dabatase)

        // const level = 19
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