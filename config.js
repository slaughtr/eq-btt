exports.config = {
    UUIDs: {
        locUUID: 'EDA9574A-E341-4D52-8FB6-BC891EA1B3F3',
        zoneUUID: '77A9DA3C-77F9-4769-85DD-D70F3719BF83',
        directionUUID: '608965DB-2494-4187-B2B0-6F5FAC79527D',
        dpsUUID: '34EB234B-C378-4FBD-9A78-86A40D1620C9',
        petDpsUUID: ''
    },
    // should probably allow arrays
    // logFiles: [process.env.EQ_DIR + 'eqlog_Vaine_loginse.txt', process.env.EQ_DIR + 'eqlog_Dreadsnot_loginse.txt']
    logFile: process.env.EQ_DIR + 'eqlog_Dreadsnot_loginse.txt',
    connection: {
        port: 55896,
        domain: '127.0.0.1',
        secret: process.env.BTT_SECRET
    },
    parseChannel: 'Parsetest',
    tracking: {
        TRACK_DPS: true, // This MUST be true if ANY DPS is to be tracked
        TRACK_PET_DPS: false, 
        TRACK_PLAYER_DPS: true,
        TRACK_OTHER_DPS: [], // just a thought for boxers
        DPS_DURATION: 10000, // time in ms between DPS calcs
    }
}