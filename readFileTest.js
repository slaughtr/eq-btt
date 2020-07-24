const dir = '/users/dslaught/Desktop/PLAY/TAKP'
const file = '/users/dslaught/Desktop/PLAY/TAKP/eqlog_Vaine_loginse.txt'

const Tail = require('tail').Tail
const tail = new Tail(file)
const fetch = require('node-fetch')
	// domain: '127.0.0.1'
	// port: 55896

const parseChannel = 'Parsetest'

tail.on('line', data => {
	const realData = data.substring(26).trim()
	console.log(realData)

	if (realData.includes(parseChannel)) console.log('PARSETEST: ', realData.substring(realData.indexOf("'") + 1, realData.length -1))
	if (realData.includes('Your Location')) {
		// Your Location is -319.37, 881.40, -92.25
		const parsedLoc = realData.substring(16, realData.lastIndexOf(',')).trim().split(',')
		const url = `http://127.0.0.1:55896/update_touch_bar_widget/?uuid=EDA9574A-E341-4D52-8FB6-BC891EA1B3F3&text=${parsedLoc[0]+','+parsedLoc[1]}&background_color=200,200,100,255&shared_secret=secret`
		fetch(url).then()

	}
})

tail.on('error', err => {
	console.error(err)
})