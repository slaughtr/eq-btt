const fetch = require('node-fetch')
const colorNames = require('color-name-list')

const { config } = require('./config')

const sendToBTT = (UUID, text, color = 'Black', transparency = 255) => {
    let { r = 255, g = 255, b = 255 } = colorNames.find(x => x.name === color)
    const { connection: { domain, port, secret } } = config

    const bgColor = `${r},${g},${b},${transparency}`

    const url = `http://${domain}:${port}/update_touch_bar_widget/?uuid=${UUID}&text=${text}&background_color=${bgColor}&shared_secret=${secret}`

    fetch(url).then(console.log('Sent'))
}

exports.sendToBTT = sendToBTT

