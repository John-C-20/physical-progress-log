const express = require("express")
const router = express.Router() 
const { Exercise } = require("../../models/Exercise");

router.get("/all", (req, res) => {
    Exercise.find()
    .then(exercise => res.send(exercise)) 
})

router.post("/new", (req, res) => {
    console.log(req)
    Exercise.create(req.body)
    .then(exercise => res.send(exercise))
    .catch(err => res.send(err))
})

module.exports = router; 