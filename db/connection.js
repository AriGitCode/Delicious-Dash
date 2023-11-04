const mongoose = require('mongoose')
const { DATABASE_URL } = require('../config')

mongoose.connect(DATABASE_URL, { useNewUrlParser:true })
.then(() => {
    console.log('Successfully connected to MongoDB.')
})
.catch(e => {
    console.error('Connection error', e.message)
})

const db = mongoose.connection

module.exports = mongoose;

