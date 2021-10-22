// Express Routing

const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../../controllers/users");
const passport = require('passport');

router.get("/", (req, res) => res.json({msg: "this is the users route"}))
// router.get("/:id", (req, res) => res.json({msg: "this is a second users route"}))
router.post("/register", registerUser)
router.post("/login", loginUser)
router.get("/current", passport.authenticate('jwt', {session:false}), (req, res) => {
    console.log(req)
    console.log(req.user)
    res.json(req.user);
})

module.exports = router;