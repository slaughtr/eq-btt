const {
    addRxPlugin,
    createRxDatabase
} = require('rxdb');

// Going with websql over leveldb as I assume there will potentially be multiple instances running for boxes
addRxPlugin(require('pouchdb-adapter-node-websql'));

const db = await createRxDatabase({
    name: 'eq',
    adapter: 'websql',
    // password: process.env.RXDB_PASSWORD || 'password', // (optional) seems unnecessary for this app
    multiInstance: true, // Allows multiple processes to use the DB together 
    eventReduce: true // seems like a good idea
});
console.dir(db);

// or use a specific folder to store the data
const database = await createRxDatabase({
    name: process.env.RXDB_FILE_LOCATION || './eq',
    adapter: 'websql' // the name of your adapter
});