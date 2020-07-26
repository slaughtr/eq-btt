const file = '../../../Torven_Logs/eqlog_Torven_52_1_cleaned.txt'

const LineReader = require('line-by-line')
const lr = new LineReader(file)
const dayjs = require('dayjs')

const sleep = time => {
   return new Promise((res, rej) => {
       setTimeout(res, time)
   })
}

const {processLine} = require('../../src/eqlog-parser/parser')

let prevTime = dayjs('Sun Nov 18 14:08:39 2012')
let prevLine = ''

lr.on('error', console.error)

lr.on('line', line => {
    const lineTime = dayjs(line.substring(1, 25))
    // console.log(time)
    if (prevTime) {
        if (prevTime.isBefore(lineTime)) {
            console.log(line)
            // do previous time's line
            processLine(prevLine)
            lr.pause()
            sleep((lineTime.valueOf() - prevTime.valueOf())/10).then(() => {
                prevLine = line
                prevTime = lineTime
                // console.log('done with .then')
                lr.resume()
            })
        }
    } else {
        processLine(line)
        prevLine = line
        prevTime = lineTime
    }
    // pause emitting of lines...
    // lr.pause();

    // // ...do your asynchronous line processing..
    // setTimeout(function () {

    //     // ...and continue emitting lines.
    //     lr.resume();
    // }, 100);
})