const express = require('express')
const axios = require('axios')
const { posts } = require('./endpoints')
const { authenticate } = require('./middlewares')
const services = require('./services')
const app = express()
const port = 3000

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ limit: '50mb', extended: false }))
app.use(express.json())

// dependencies injection
const postsHandlers = posts(services)

// app.get('/', usersHandlers.get)
app.post('/', authenticate, postsHandlers.post)
// app.put('/:id', usersHandlers.put)
// app.delete('/:id', usersHandlers.delete)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app

