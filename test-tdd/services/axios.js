const axios = require('axios')

const instance = axios.default({
    baseURL: 'http://www.miapp.app'
})

module.exports = instance