// const file = '../../../Torven_Logs/eqlog_Torrin_52_3_cleaned.txt'
const file = '../../../ikatiar-10.07.16.txt'
const LineReader = require('line-by-line')
const lr = new LineReader(file)
const dayjs = require('dayjs')

const sleep = time => {
    return new Promise((res, rej) => {
        setTimeout(res, time)
    })
}

const { processLine } = require('../eqlog-parser/parser')

let prevTime = dayjs('Wed Sep 18 02:26:20 2013')
let prevLine = ''

lr.on('error', console.error)

lr.on('line', line => {
    const lineTime = dayjs(line.substring(1, 25))

    if (prevTime) {
        processLine(prevLine)

        lr.pause()

        sleep((lineTime.valueOf() - prevTime.valueOf())).then(() => {
            prevLine = line
            prevTime = lineTime
            lr.resume()
        })

    } else {
        processLine(line)
        prevLine = line
        prevTime = lineTime
    }
})

lr.on('end', () => {
    // give the last tick/DPS timer a chance
    sleep(10000).then(() => {
        process.exit()
    })
})