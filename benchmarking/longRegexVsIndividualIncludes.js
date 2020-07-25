const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;
// basic usage
var bench = Benchmark({
    'setup': function () {
        var c = this.count,
            element = document.getElementById('container');
        while (c--) {
            element.appendChild(document.createElement('div'));
        }
    },
    'fn': function () {
        element.removeChild(element.lastChild);
    }
});

const { config } = require('../config')

const stringIncludes = () => {
    const file = config.logFile
    const fs = require('fs')
    const fileLines = fs.readFileSync(file).toString().split('\r\n')
    const count = 0
    for (const line of fileLines) {
        if (line.includes('smash')) {
            count++
        } else if (line.includes('smashes')) {
            count++
        } else if (line.includes('hit')) {
            count++
        } else if (line.includes('slash')) {
            count++
        } else if (line.includes('claw')) {
            count++
        } else if (line.includes('claws')) {
            count++
        } else if (line.includes('crush')) {
            count++
        } else if (line.includes('pierce')) {
            count++
        } else if (line.includes('kick')) {
            count++
        } else if (line.includes('bash')) {
            count++
        } else if (line.includes('maul')) {
            count++
        } else if (line.includes('gore')) {
            count++
        } else if (line.includes('gores')) {
            count++
        } else if (line.includes('slice')) {
            count++
        } else if (line.includes('slices')) {
            count++
        } else if (line.includes('slashes')) {
            count++
        } else if (line.includes('crushes')) {
            count++
        } else if (line.includes('hits')) {
            count++
        } else if (line.includes('punch')) {
            count++
        } else if (line.includes('punches')) {
            count++
        } else if (line.includes('kicks')) {
            count++
        } else if (line.includes('bashes')) {
            count++
        } else if (line.includes('bites')) {
            count++
        } else if (line.includes('pierces')) {
            count++
        } else if (line.includes('mauls')) {
            count++
        } else if (line.includes('backstab')) {
            count++
        } else if (line.includes('backstabs')) {
            count++
        } else if (line.includes('rends')) {
            count++
        }

    }
}

const regexTest = () => {
    const file = config.logFile
    const fs = require('fs')
    const fileLines = fs.readFileSync(file).toString().split('\r\n')
    const count = 0
    const regex = /smash|smashes|hit|slash|claw|claws|crush|pierce|kick|bash|maul|gore|gores|slice|slices|slashes|crushes|hits|punch|punches|kicks|bashes|bites|pierces|mauls|backstab|backstabs|rends/
    for (const line of fileLines) {
        if (regex.test(line)) {
            count++
        }
    }
}

// add tests
suite.add('RegExp#test', regexTest)
.add('String#includes', stringIncludes)
    .add('RegExp#test', regexTest)
    .add('String#includes', stringIncludes)
    .add('RegExp#test', regexTest)
    .add('String#includes', stringIncludes)
    .add('RegExp#test', regexTest)
    .add('String#includes', stringIncludes)
    .add('RegExp#test', regexTest)
    .add('String#includes', stringIncludes)
    .add('RegExp#test', regexTest)
    .add('String#includes', stringIncludes)
    .add('RegExp#test', regexTest)
    .add('String#includes', stringIncludes)
    .add('RegExp#test', regexTest)
    .add('String#includes', stringIncludes)
    .add('RegExp#test', regexTest)
    .add('String#includes', stringIncludes)
    .add('RegExp#test', regexTest)
    .add('String#includes', stringIncludes)
    .add('RegExp#test', regexTest)
    .add('String#includes', stringIncludes)
        .add('RegExp#test', regexTest)
        .add('String#includes', stringIncludes)
    // add listeners
    .on('cycle', (event) => {
        console.log(String(event.target));
    })
    .on('complete',  () => {
        //
    })
    // run async
    .run({ 'async': true });

// logs:
// => RegExp#test x 4,161,532 +-0.99% (59 cycles)
// => String#indexOf x 6,139,623 +-1.00% (131 cycles)
// => Fastest is String#indexOf