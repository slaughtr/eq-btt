const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;
const file = './ikatiar-10.07.16.txt'
const fs = require('fs')
const fileLines = fs.readFileSync(file).toString().split('\r\n')

const split = () => {
    // WINNER
    const count = 0
    const regex = /(\s)(punches|kicks|bashes|bites|pierces|mauls|slices|slashes|crushes|hits|gores|claws|smashes|backstabs|rends|smash|hit|slash|claw|crush|pierce|kick|bash|maul|gore|slice|punch|backstab)(\s)(.*)( for )(\d+)/
    for (const line of fileLines) {
        if (/smash|smashes|hit|slash|claw|claws|crush|pierce|kick|bash|maul|gore|gores|slice|slices|slashes|crushes|hits|punch|punches|kicks|bashes|bites|pierces|mauls|backstab|backstabs|rends/.test(line)) {
            if (!/YOU riposte|ripostes!|YOU dodge|dodges!|YOU parry|parries!|but miss/.test(line)) {
                const [attacker, , verb, , target, , damage] = line.split(regex)
                count++
            }
        }
    }
}

const match = () => {

    const count = 0
    const regex = /(You|.*\b) (punches|kicks|bashes|bites|pierces|mauls|slices|slashes|crushes|hits|gores|claws|smashes|backstabs|rends|smash|hit|slash|claw|crush|pierce|kick|bash|maul|gore|slice|punch|backstab) (YOU|.*\b) for ([0-9]+)/
    for (const line of fileLines) {
        if (/smash|smashes|hit|slash|claw|claws|crush|pierce|kick|bash|maul|gore|gores|slice|slices|slashes|crushes|hits|punch|punches|kicks|bashes|bites|pierces|mauls|backstab|backstabs|rends/.test(line)) {
            if (!/YOU riposte|ripostes!|YOU dodge|dodges!|YOU parry|parries!|but miss/.test(line)) {
                const [, attacker, verb, target, damage] = line.match(regex)
                count++
            }
        }
    }
}

// add tests
suite.add('Split', split)
    .add('Match', match)
    .add('Split', split)
    .add('Match', match)
    .add('Split', split)
    .add('Match', match)
    .add('Split', split)
    .add('Match', match)
    .add('Split', split)
    .add('Match', match)
    .add('Split', split)
    .add('Match', match)
    .add('Split', split)
    .add('Match', match)
    .add('Split', split)
    .add('Match', match)
    .add('Split', split)
    .add('Match', match)
    .add('Split', split)
    .add('Match', match)
    .add('Split', split)
    .add('Match', match)
    .add('Split', split)
    .add('Match', match)
    // add listeners
    .on('cycle', (event) => {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
        //
    })
    // run async
    .run({ 'async': true });

// logs:
// ❯ node damageLineMatchVsSplit.js
// Split x 142,234 ops/sec ±0.78 % (86 runs sampled)
// Match x 140,078 ops/sec ±0.75 % (88 runs sampled)
// Split x 140,723 ops/sec ±0.92 % (85 runs sampled)
// Match x 140,782 ops/sec ±0.87 % (84 runs sampled)
// Split x 140,334 ops/sec ±1.32 % (89 runs sampled)
// Match x 140,634 ops/sec ±0.85 % (87 runs sampled)
// Split x 143,185 ops/sec ±0.71 % (85 runs sampled)
// Match x 139,238 ops/sec ±1.03 % (87 runs sampled)
// Split x 136,158 ops/sec ±1.74 % (86 runs sampled)
// Match x 139,001 ops/sec ±0.58 % (88 runs sampled)
// Split x 141,752 ops/sec ±0.75 % (87 runs sampled)
// Match x 139,162 ops/sec ±0.58 % (87 runs sampled)
// Split x 141,484 ops/sec ±0.99 % (88 runs sampled)
// Match x 140,081 ops/sec ±0.63 % (86 runs sampled)
// Split x 141,523 ops/sec ±0.65 % (85 runs sampled)
// Match x 130,894 ops/sec ±15.11 % (88 runs sampled)
// Split x 142,194 ops/sec ±0.65 % (87 runs sampled)
// Match x 140,128 ops/sec ±0.85 % (89 runs sampled)
// Split x 141,055 ops/sec ±0.56 % (87 runs sampled)
// Match x 140,680 ops/sec ±0.63 % (87 runs sampled)
// Split x 142,927 ops/sec ±0.79 % (87 runs sampled)
// Match x 139,243 ops/sec ±0.70 % (86 runs sampled)
// Split x 141,938 ops/sec ±1.00 % (88 runs sampled)
// Match x 130,096 ops/sec ±14.57 % (85 runs sampled)
// Fastest is Split, Split, Split, Split, Split, Split, Split, Split, Match