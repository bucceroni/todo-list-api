const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");

// Create todo
router.post("/add", todoController.add);

module.exports = router;
