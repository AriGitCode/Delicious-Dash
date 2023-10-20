const express = require("express")
const app = express()
const ejsLayouts = require("ejs")
const PORT = 3000

//Connecting ejs template to app
app.set('view engine', 'ejs')
app.use(ejsLayouts)
const indexRouter = require("../routes/index")
app.use("/", indexRouter)

//Connect to the port
app.listen( PORT, () => {
    console.log(`app is listening to ${PORT}`)
})

