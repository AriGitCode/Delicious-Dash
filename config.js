const env = require("dotenv").config();
const DATABASE_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.6xvvg5e.mongodb.net/?retryWrites=true&w=majority`;
console.log(process.env);
const PORT = process.env.PORT || 8080;

module.exports = { DATABASE_URL, PORT };
