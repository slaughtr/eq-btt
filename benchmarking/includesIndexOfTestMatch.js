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

const {config} = require('../config')
// add tests
suite.add('RegExp#test', () => {
    const file = config.logFile
    const fs = require('fs')
    const fileLines = fs.readFileSync(file).toString().split('\r\n')
    for (const line of fileLines) {
        /lands a Crippling Blow/.test(line);
    }
    })
    .add('String#match', () => {
        const file = config.logFile
        const fs = require('fs')
        const fileLines = fs.readFileSync(file).toString().split('\r\n')
        for (const line of fileLines) {
            line.match(/lands a Crippling Blow/)
        }
    })
    .add('String#indexOf', () => {
        const file = config.logFile
        const fs = require('fs')
        const fileLines = fs.readFileSync(file).toString().split('\r\n')
        for (const line of fileLines) {
            line.indexOf('lands a Crippling Blow') > -1;
        }
    })
    .add('String#includes', () => {
        const file = config.logFile
        const fs = require('fs')
        const fileLines = fs.readFileSync(file).toString().split('\r\n')
        for (const line of fileLines) {
            line.includes('lands a Crippling Blow')
        }
    }).add('RegExp#test', () => {
        const file = config.logFile
        const fs = require('fs')
        const fileLines = fs.readFileSync(file).toString().split('\r\n')
        for (const line of fileLines) {
            /lands a Crippling Blow/.test(line);
        }
    })
    .add('String#match', () => {
        const file = config.logFile
        const fs = require('fs')
        const fileLines = fs.readFileSync(file).toString().split('\r\n')
        for (const line of fileLines) {
            line.match(/lands a Crippling Blow/)
        }
    })
    .add('String#indexOf', () => {
        const file = config.logFile
        const fs = require('fs')
        const fileLines = fs.readFileSync(file).toString().split('\r\n')
        for (const line of fileLines) {
            line.indexOf('lands a Crippling Blow') > -1;
        }
    })
    .add('String#includes', () => {
        const file = config.logFile
        const fs = require('fs')
        const fileLines = fs.readFileSync(file).toString().split('\r\n')
        for (const line of fileLines) {
            line.includes('lands a Crippling Blow')
        }
    }).add('RegExp#test', () => {
        const file = config.logFile
        const fs = require('fs')
        const fileLines = fs.readFileSync(file).toString().split('\r\n')
        for (const line of fileLines) {
            /lands a Crippling Blow/.test(line);
        }
    })
    .add('String#match', () => {
        const file = config.logFile
        const fs = require('fs')
        const fileLines = fs.readFileSync(file).toString().split('\r\n')
        for (const line of fileLines) {
            line.match(/lands a Crippling Blow/)
        }
    })
    .add('String#indexOf', () => {
        const file = config.logFile
        const fs = require('fs')
        const fileLines = fs.readFileSync(file).toString().split('\r\n')
        for (const line of fileLines) {
            line.indexOf('lands a Crippling Blow') > -1;
        }
    })
    .add('String#includes', () => {
        const file = config.logFile
        const fs = require('fs')
        const fileLines = fs.readFileSync(file).toString().split('\r\n')
        for (const line of fileLines) {
            line.includes('lands a Crippling Blow')
        }
    }).add('RegExp#test', () => {
        const file = config.logFile
        const fs = require('fs')
        const fileLines = fs.readFileSync(file).toString().split('\r\n')
        for (const line of fileLines) {
            /lands a Crippling Blow/.test(line);
        }
    })
    .add('String#match', () => {
        const file = config.logFile
        const fs = require('fs')
        const fileLines = fs.readFileSync(file).toString().split('\r\n')
        for (const line of fileLines) {
            line.match(/lands a Crippling Blow/)
        }
    })
    .add('String#indexOf', () => {
        const file = config.logFile
        const fs = require('fs')
        const fileLines = fs.readFileSync(file).toString().split('\r\n')
        for (const line of fileLines) {
            line.indexOf('lands a Crippling Blow') > -1;
        }
    })
    .add('String#includes', () => {
        const file = config.logFile
        const fs = require('fs')
        const fileLines = fs.readFileSync(file).toString().split('\r\n')
        for (const line of fileLines) {
            line.includes('lands a Crippling Blow')
        }
    }).add('RegExp#test', () => {
        const file = config.logFile
        const fs = require('fs')
        const fileLines = fs.readFileSync(file).toString().split('\r\n')
        for (const line of fileLines) {
            /lands a Crippling Blow/.test(line);
        }
    })
    .add('String#match', () => {
        const file = config.logFile
        const fs = require('fs')
        const fileLines = fs.readFileSync(file).toString().split('\r\n')
        for (const line of fileLines) {
            line.match(/lands a Crippling Blow/)
        }
    })
    .add('String#indexOf', () => {
        const file = config.logFile
        const fs = require('fs')
        const fileLines = fs.readFileSync(file).toString().split('\r\n')
        for (const line of fileLines) {
            line.indexOf('lands a Crippling Blow') > -1;
        }
    })
    .add('String#includes', () => {
        const file = config.logFile
        const fs = require('fs')
        const fileLines = fs.readFileSync(file).toString().split('\r\n')
        for (const line of fileLines) {
            line.includes('lands a Crippling Blow')
        }
    }).add('RegExp#test', () => {
        const file = config.logFile
        const fs = require('fs')
        const fileLines = fs.readFileSync(file).toString().split('\r\n')
        for (const line of fileLines) {
            /lands a Crippling Blow/.test(line);
        }
    })
    .add('String#match', () => {
        const file = config.logFile
        const fs = require('fs')
        const fileLines = fs.readFileSync(file).toString().split('\r\n')
        for (const line of fileLines) {
            line.match(/lands a Crippling Blow/)
        }
    })
    .add('String#indexOf', () => {
        const file = config.logFile
        const fs = require('fs')
        const fileLines = fs.readFileSync(file).toString().split('\r\n')
        for (const line of fileLines) {
            line.indexOf('lands a Crippling Blow') > -1;
        }
    })
    .add('String#includes', () => {
        const file = config.logFile
        const fs = require('fs')
        const fileLines = fs.readFileSync(file).toString().split('\r\n')
        for (const line of fileLines) {
            line.includes('lands a Crippling Blow')
        }
    }).add('RegExp#test', () => {
        const file = config.logFile
        const fs = require('fs')
        const fileLines = fs.readFileSync(file).toString().split('\r\n')
        for (const line of fileLines) {
            /lands a Crippling Blow/.test(line);
        }
    })
    .add('String#match', () => {
        const file = config.logFile
        const fs = require('fs')
        const fileLines = fs.readFileSync(file).toString().split('\r\n')
        for (const line of fileLines) {
            line.match(/lands a Crippling Blow/)
        }
    })
    .add('String#indexOf', () => {
        const file = config.logFile
        const fs = require('fs')
        const fileLines = fs.readFileSync(file).toString().split('\r\n')
        for (const line of fileLines) {
            line.indexOf('lands a Crippling Blow') > -1;
        }
    })
    .add('String#includes', () => {
        const file = config.logFile
        const fs = require('fs')
        const fileLines = fs.readFileSync(file).toString().split('\r\n')
        for (const line of fileLines) {
            line.includes('lands a Crippling Blow')
        }
    }).add('RegExp#test', () => {
        const file = config.logFile
        const fs = require('fs')
        const fileLines = fs.readFileSync(file).toString().split('\r\n')
        for (const line of fileLines) {
            /lands a Crippling Blow/.test(line);
        }
    })
    .add('String#match', () => {
        const file = config.logFile
        const fs = require('fs')
        const fileLines = fs.readFileSync(file).toString().split('\r\n')
        for (const line of fileLines) {
            line.match(/lands a Crippling Blow/)
        }
    })
    .add('String#indexOf', () => {
        const file = config.logFile
        const fs = require('fs')
        const fileLines = fs.readFileSync(file).toString().split('\r\n')
        for (const line of fileLines) {
            line.indexOf('lands a Crippling Blow') > -1;
        }
    })
    .add('String#includes', () => {
        const file = config.logFile
        const fs = require('fs')
        const fileLines = fs.readFileSync(file).toString().split('\r\n')
        for (const line of fileLines) {
            line.includes('lands a Crippling Blow')
        }
    }).add('RegExp#test', () => {
        const file = config.logFile
        const fs = require('fs')
        const fileLines = fs.readFileSync(file).toString().split('\r\n')
        for (const line of fileLines) {
            /lands a Crippling Blow/.test(line);
        }
    })
    .add('String#match', () => {
        const file = config.logFile
        const fs = require('fs')
        const fileLines = fs.readFileSync(file).toString().split('\r\n')
        for (const line of fileLines) {
            line.match(/lands a Crippling Blow/)
        }
    })
    .add('String#indexOf', () => {
        const file = config.logFile
        const fs = require('fs')
        const fileLines = fs.readFileSync(file).toString().split('\r\n')
        for (const line of fileLines) {
            line.indexOf('lands a Crippling Blow') > -1;
        }
    })
    .add('String#includes', () => {
        const file = config.logFile
        const fs = require('fs')
        const fileLines = fs.readFileSync(file).toString().split('\r\n')
        for (const line of fileLines) {
            line.includes('lands a Crippling Blow')
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