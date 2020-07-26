const fetch = require('node-fetch')
const colorNames = require('color-name-list')

const { config: { connection: { domain, port, secret } } } = require('../../config')

const sendToBTT = (UUID, text, color = 'Black', transparency = 255) => {
    // TODO: figure out why this isn't working
    let { r = 255, g = 255, b = 255 } = colorNames.find(x => x.name === color)

    const bgColor = `${r},${g},${b},${transparency}`

    const url = `http://${domain}:${port}/update_touch_bar_widget/?uuid=${UUID}&text=${text}&background_color=${bgColor}&shared_secret=${secret}`

    fetch(url).then(console.log(`Sent ${text} to BTT`))
}

exports.sendToBTT = sendToBTT

