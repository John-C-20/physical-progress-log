// Express Routing

const express = require("express")
const router = express.Router() 

router.get("/test", (req, res) => res.json({msg: "this is the users route"}))
router.get("/test2", (req, res) => res.json({msg: "this is a second users route"}))

module.exports = router;