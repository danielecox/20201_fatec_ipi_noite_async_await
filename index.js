require('dotenv').config()
const axios = require('axios')
const { APIID, PROTOCOL, BASE_URL, UNITS, LANGUAGE } = process.env
const url = `${PROTOCOL}://${BASE_URL}?q=ITU&appid=${APIID}&lang=${LANGUAGE}&units=${UNITS}`

//console.log(url)

//promise usando axios

axios.get(url)
.then(res=> console.log(res.data))

