// adminMenuRouter.js
const express = require("express");
const router = express.Router();
const menuAdminController = require("../controllers/menuController");


router.post("/",  menuAdminController.createMenuItem);
router.post("/:id",  menuAdminController.updateMenuItem);
router.delete("/:id", menuAdminController.deleteMenuItem);
module.exports = router;




