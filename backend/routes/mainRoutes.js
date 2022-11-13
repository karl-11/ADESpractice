const express = require("express");
const router = express.Router();

// const userRoutes = require("./usersRoutes");
const inventoryRoutes = require("./inventoryRoutes");

// router.use("/users", userRoutes);
router.use("/inventory", inventoryRoutes);

module.exports = router;