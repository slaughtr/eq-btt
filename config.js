exports.config = {
    UUIDs: {
        locUUID: 'EDA9574A-E341-4D52-8FB6-BC891EA1B3F3',
        zoneUUID: '77A9DA3C-77F9-4769-85DD-D70F3719BF83',
        directionUUID: '608965DB-2494-4187-B2B0-6F5FAC79527D'
    },
    // should probably allow arrays
    // logFiles: ['/users/dslaught/Desktop/PLAY/TAKP/eqlog_Vaine_loginse.txt', '/users/dslaught/Desktop/PLAY/TAKP/eqlog_Dreadsnot_loginse.txt']
    logFile: '/users/dslaught/Desktop/PLAY/TAKP/eqlog_Dreadsnot_loginse.txt',
    connection: {
        port: 55896,
        domain: '127.0.0.1',
        secret: process.env.BTT_SECRET
    },
    parseChannel: 'Parsetest'
}