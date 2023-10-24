const mongoose = require('mongoose')
const { DATABASE_URL } = require('../config')

mongoose
.connect(DATABASE_URL, { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db