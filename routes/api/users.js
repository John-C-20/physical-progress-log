// Express Routing

const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../../controllers/users");

router.get("/", (req, res) => res.json({msg: "this is the users route"}))
router.get("/:id", (req, res) => res.json({msg: "this is a second users route"}))
router.post("/register", registerUser)
router.post("/login", loginUser)

module.exports = router;