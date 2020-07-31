const { addRxPlugin, createRxDatabase } = require('rxdb')
const { createCollections, insertDefaults } = require('./create-collections')
// Going with websql over leveldb as I assume there will potentially be multiple instances running for boxes
addRxPlugin(require('pouchdb-adapter-node-websql'))


const run = async () => {
    try {
        // use a specific folder (file name?) to store the data
        // TODO: better handlindg of DB file
        const database = await createRxDatabase({
            name: process.env.RXDB_FILE_LOCATION || './db/eq',
            adapter: 'websql',
            multiInstance: true, // Allows multiple processes to use the DB together
            eventReduce: true // seems like a good idea
        })

        await createCollections(database)

        await insertDefaults(database)

        const level = 20

        // const docs = await database.regen.findOne()
        const doc = await database.regen.findOne({
            selector: {$and: [ {beginLevel: {$lte: level}}, {endLevel: {$gte: level}, iksarOrTroll: true} ]}
        }).exec()

        console.log(doc.get('sitting'))
        // await database.regen.dump()
        //     .then(json => console.dir(json))

        // console.log(docs)

    } catch (e) {
        console.error(e)
    }
}

run().then(process.exit)