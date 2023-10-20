const express = require("express")
const router = express.Router
const {home, asian, indian, italian, mediterranean} = require("./controllers/restaurantController")

router.get("/", home)
router.get("/asian", asian)
router.get("/indian", indian)
router.get("/italian", italian)
router.get("/mediterranean", mediterranean)

module.exports = router