const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");

// Create todo
router.post("/create", todoController.create);
// Update todo by id
router.put('/update/:id', todoController.update);
// Delete todo by id
router.delete('/delete/:id', todoController.delete);
// Get all todos by user
router.get('/:user', todoController.user)

module.exports = router;
