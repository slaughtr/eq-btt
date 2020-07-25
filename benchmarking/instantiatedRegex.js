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

// add tests
suite.add('RegExp#notInstantiated', () => {
    const file = config.logFile
    const fs = require('fs')
    const fileLines = fs.readFileSync(file).toString().split('\r\n')
    for (const line of fileLines) {
        /smash|smashes|hit|slash|claw|claws|crush|pierce|kick|bash|maul|gore|gores|slice|slices|slashes|crushes|hits|punch|punches|kicks|bashes|bites|pierces|mauls|backstab|backstabs|rends/.test(line);
    }
})
    .add('RegExp#instantiated', () => {
        const file = config.logFile
        const fs = require('fs')
        const fileLines = fs.readFileSync(file).toString().split('\r\n')
        const regex = new RegExp(/smash|smashes|hit|slash|claw|claws|crush|pierce|kick|bash|maul|gore|gores|slice|slices|slashes|crushes|hits|punch|punches|kicks|bashes|bites|pierces|mauls|backstab|backstabs|rends/)
        for (const line of fileLines) {
            regex.test(line)
        }
    })
    .add('RegExp#instantiated', () => {
        const file = config.logFile
        const fs = require('fs')
        const fileLines = fs.readFileSync(file).toString().split('\r\n')
        const regex = /smash|smashes|hit|slash|claw|claws|crush|pierce|kick|bash|maul|gore|gores|slice|slices|slashes|crushes|hits|punch|punches|kicks|bashes|bites|pierces|mauls|backstab|backstabs|rends/
        for (const line of fileLines) {
            regex.test(line)
        }
    })
    // add listeners
    .on('cycle', (event) => {
        console.log(String(event.target));
    })
    .on('complete', () => {
        //
    })
    // run async
    .run({ 'async': true });

// logs:
// => RegExp#test x 4,161,532 +-0.99% (59 cycles)
// => String#indexOf x 6,139,623 +-1.00% (131 cycles)
// => Fastest is String#indexOf