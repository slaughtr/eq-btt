const lines = [
    "Your target is too far away, get closer!",
    "Your target is too far away, get closer!",
    "Xonartik tells you, 'Attacking tormented dead Master.'",
    "Tormented dead tries to hit YOU, but misses!",
    "Tormented dead tries to bash YOU, but misses!",
    "You taunt tormented dead to ignore others and attack you!",
    "You bash tormented dead for 18 points of damage.",
    "Taunting attacker, Master.",
    "You try to slash tormented dead, but miss!",
    "Tormented dead hits YOU for 2 points of damage.",
    "You begin casting Siphon Strength.",
    "You feel your strength grow.",
    "Tormented dead weakens.",
    "You slash tormented dead for 20 points of damage.",
    "You haven't recovered yet...",
    "Tormented dead hits YOU for 2 points of damage.",
    "Xonartik hits tormented dead for 8 points of damage.",
    "Taunting attacker, Master.",
    "You slash tormented dead for 28 points of damage.",
    "You taunt tormented dead to ignore others and attack you!",
    "You begin casting Lifespike.",
    "Tormented dead tries to bash YOU, but misses!",
    "Tormented dead hits YOU for 2 points of damage.",
    "Your spell is interrupted.",
    "You bash tormented dead for 18 points of damage.",
    "You begin casting Clinging Darkness.",
    "Tormented dead hits Xonartik for 15 points of damage.",
    "Tormented dead is surrounded by darkness.",
    "You slash tormented dead for 29 points of damage.",
    "Someperson tells Alliance: 1, 'some message with 20 numbers'",
    "Tormented dead hits YOU for 2 points of damage.",
    "Xonartik hits tormented dead for 1 point of damage.",
    "Taunting attacker, Master.",
    "You slash tormented dead for 10 points of damage.",
    "Your Serpentine Bracer feels alive with power.",
    "You taunt tormented dead to ignore others and attack you!",
    "Tormented dead tries to hit YOU, but misses!",
    "Xonartik hits tormented dead for 1 point of damage.",
    "Tormented dead bashes YOU for 3 points of damage.",
    "Your target is too far away, get closer!",
    "You have become better at Parry!(34)",
    "Tormented dead hits YOU for 2 points of damage.",
    "Your target is too far away, get closer!",
    "Your Serpentine Bracer feels alive with power.",
    "Tormented dead tries to hit YOU, but misses!",
    "Tormented dead hits YOU for 12 points of damage.",
    "You taunt tormented dead to ignore others and attack you!",
    "tormented dead says 'I'll teach you to interfere with me Dreadsnot.'",
    "You try to slash tormented dead, but miss!",
    "Tormented dead hits YOU for 2 points of damage.",
    "Tormented dead tries to bash YOU, but YOU dodge!",
    "You try to slash tormented dead, but miss!",
    "Xonartik bashes tormented dead for 2 points of damage.",
    "Your Serpentine Bracer feels alive with power.",
    "Tormented dead tries to hit YOU, but misses!",
]
for (const line of lines) {
    /*
    mess = 'You slash tormented dead for 20 points of damage.'
   > mess.split(/(\s)(punches|kicks|bashes|bites|pierces|mauls|slices|slashes|crushes|hits|gores|claws|smashes|backstabs|rends|smash|hit|slash|claw|crush|pierce|kick|bash|maul|gore|slice|punch|backstab)(\s)(.*)( for )(\d+)/)
    [
    'You',
    ' ',
    'slash',
    ' ',
    'tormented dead',
    ' for ',
    '20',
    ' points of damage.'
    ]
    */
    if (/smash|smashes|hit|slash|claw|claws|crush|pierce|kick|bash|maul|gore|gores|slice|slices|slashes|crushes|hits|punch|punches|kicks|bashes|bites|pierces|mauls|backstab|backstabs|rends/.test(line)) {
        if (!/YOU riposte|ripostes!|YOU dodge|dodges!|YOU parry|parries!|but miss/.test(line)) {

            // put plural verbs first so that we don't cut off the s in some cases
            const [attacker, , verb, , target, , damage] = line.split(/(\s)(punches|kicks|bashes|bites|pierces|mauls|slices|slashes|crushes|hits|gores|claws|smashes|backstabs|rends|smash|hit|slash|claw|crush|pierce|kick|bash|maul|gore|slice|punch|backstab)(\s)(.*)( for )(\d+)/)
            console.log(`Attacker: ${attacker} | Verb: ${verb} | Target: ${target} | Damage: ${damage}`)
        }
    }
}