// adminMenuRouter.js
const express = require("express");
const router = express.Router();
const menuAdminController = require("../controllers/userController");
const { isAdmin } = require("../middleware/checkauth");


// Admin CRUD operations on menu items
router.post("/", isAdmin, menuAdminController.createMenuItem);
router.put("/:id", isAdmin, menuAdminController.updateMenuItem);
router.delete("/:id", isAdmin, menuAdminController.deleteMenuItem);
module.exports = router;




