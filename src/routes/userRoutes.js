const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

// CRUD endpoints
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post("/", userController.createUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

// Relationship distance endpoint
router.get("/:id1/distance/:id2", userController.getRelationshipDistance);

module.exports = router;
