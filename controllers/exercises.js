const { Exercise } = require("../models/Exercise.js");


const getExercises = async (req, res) => {
    try {
        const exercises = await Exercise.find();
        res.status(200).json(exercises) 
    } catch (error) {
        res.status(404).json(error)
    }
}

const addExercise = async (req, res) => {
    try {
        const body = await req.body 
        const exercise = await Exercise.create(body)
        res.status(200).json(exercise)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { 
    getExercises,
    addExercise
}
