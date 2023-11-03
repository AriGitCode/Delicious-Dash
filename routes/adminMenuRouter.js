// adminMenuRouter.js
const express = require("express");
const router = express.Router();
const menuAdminController = require("../controllers/menuController");



// Admin CRUD operations on menu items
router.post("/",  menuAdminController.createMenuItem);
router.post("/:id",  menuAdminController.updateMenuItem);
router.delete("/:id", menuAdminController.deleteMenuItem);
module.exports = router;




