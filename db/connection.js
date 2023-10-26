const mongoose = require('mongoose')
const { DATABASE_URL } = require('../config')

mongoose
.connect(`mongodb+srv://wissam:richy1234@cluster0.6xvvg5e.mongodb.net/?retryWrites=true&w=majority`, { useNewUrlParser:true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db