const {Tail} = require('tail')
const tail = new Tail(file)
const fetch = require('node-fetch')
const colorNames = require('color-name-list')

const {config} = require('./config')

const sendReq = (UUID, text, color = 'Black', transparency = 255) => {
	let someColor = colorNames.find(x => x.name === color);
	const bgColor = `${someColor.r},${someColor.g},${someColor.b},${transparency}`
	const url = `http://${config.connection.domain}:${config.connection.port}/update_touch_bar_widget/?uuid=${UUID}&text=${text}&background_color=${bgColor}&shared_secret=${config.connection.secret}`
	fetch(url).then(console.log('Sent'))
}

// for tracking things like HP etc
const tracking = {}

const tick = setInterval(() => {
	console.log('Tick')
	// HP TICK
	if (tracking.HP_CURR && tracking.HP_CURR >= tracking.HP_MAX + tracking.HP_REGEN) {
		tracking.IS_HP_TICKING = false
	} else if (tracking.HP_CURR && tracking.HP_CURR < tracking.HP_MAX && tracking.HP_REGEN) {
		tracking.HP_CURR += tracking.REGEN
		tracking.IS_HP_TICKING = true
	}

	// MANA TICK
	if (tracking.MANA_CURR && tracking.MANA_CURR >= tracking.MANA_MAX + tracking.MANA_REGEN) {
		tracking.IS_MANA_TICKING = false
		clearInterval(MANATick)
	} else if (tracking.MANA_CURR && tracking.MANA_CURR < tracking.MANA_MAX && tracking.MANA_REGEN) {
		tracking.MANA_CURR += tracking.REGEN
		tracking.IS_MANA_TICKING = true
	}
}, 6000);

tail.on('line', line => {
	// cut off timestamp
	const data = line.substring(26).trim()
	// console.log(realData)
	
	if (data.includes(parseChannel)) console.log('PARSETEST: ', data.substring(data.indexOf("'") + 1, data.length -1))
	// * Live DPS (duh)
	// * Cooldown timers
	// * Buff timers
	// * DoT timers
	// * Your boxed character is getting pummeled
	// * FD “enemies have forgotten you” alert - does this show on TAKP?
	// * rune remaining (rune amount - hits)

	// YOU for seems flimsy, needs more research
	if (data.includes('YOU for')) {
		// * Take some guesses on current HP?
		// this won't work if mob has number in name (does that ever happen?)
		const damage = /\b\d+\b/g.exec(data)
		if (tracking.HP_CURR) tracking.HP_CURR -= damage
		// sendReq
	}
	
	if (data.includes(config.parseChannel)) {
		// * Possible to parse /say things for additional benefit		
		// 	* mitigation things
		const trimmed = data.substring(24, data.length - 1)
		const split = trimmed.split(' ')
		const word = trimmed[0]
		switch (word) {
			case 'stats': {
				// 	* stats IE You tell Parsetest: 2, 'str 85 agi 75 wis 91 sta 98 dex 84 int 75 cha 85'
				const stats = split.reduce((acc, cur, i) => {
					acc += cur.toUpperCase()
					// split stats into two lines
					if (i === Math.floor(trimmed.length / 2)) acc += '\n'
					return acc
				}, '')

				sendReq(config.UUIDs.statsUUID, stats, 'Black', 255)
				break
			}
			case 'hp': {
				//  * current HP %
				tracking.HP_CURR = trimmed[1]
				// user sent "curr max" HP IE "50 100" to show current HP and max HP
				// if they didn't max and curr are same but only set if no max set this session
				if (trimmed[2] || !tracking.HP_MAX) tracking.HP_MAX = trimmed[2] ? trimmed[2] : trimmed[1]
				// sendReq
				break
			}
			case 'mana': {
				//  * current mana %... but this number isn't show in client...
				tracking.MANA_CURR = trimmed[1]
				// user sent "curr max" MANA IE "50 100" to show current MANA and max MANA
				// if they didn't max and curr are same but only set if no max set this session
				if (trimmed[2] || !tracking.MANA_MAX) tracking.MANA_MAX = trimmed[2] ? trimmed[2] : trimmed[1]
				// sendReq
				break
			}
			case 'regen': {
				// set regen
			}
			default: {
				// nothing
			}
		}
	}

	if (data.includes('You have entered')) {
		// * Current zone (links to wiki page)
		// You have entered Dagnor's Cauldron.
		const zoneName = data.substring(17, data.length - 1)
		sendReq(config.UUIDs.zoneUUID, zoneName, 'Astronaut Blue', 200)
	}
	
	if (data.includes('You think you are heading')) {
		// * Direction -- could use sense heading, could use loc math
		// You think you are heading North.
		const direction = data.substring(26, data.length - 1)
		sendReq(config.UUIDs.directionUUID, direction, 'White', 200)
	}

	if (data.includes('Your Location')) {
		// * X, Y location
		// Your Location is -319.37, 881.40, -92.25
		// get rid of Z (for now) and remove the space
		const xy = data.substring(16, data.lastIndexOf(',')).replace(' ', '')
		sendReq(config.UUIDs.locUUID, xy, 'Big Yellow Taxi')
	}
})

tail.on('error', err => {
	console.error(err)
})