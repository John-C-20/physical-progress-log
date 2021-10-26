const { Exercise } = require("../models/Exercise.js");

// We won't be using this or the Exercise model because ExerciseSchema will be embedded in Workouts

const getExercises = async (req, res) => {
    try {
        const exercises = await Exercise.find();
        res.status(200).send(exercises) 
    } catch (error) {
        res.status(404).send(error.message)
    }
}

const getExercise = async (req, res) => {
    try {
        const id = await req.params.id
        const exercise = await Exercise.find( {_id: id } );
        res.status(200).send(exercise) 
    } catch (error) {
        res.status(404).send(error.message)
    }
}

const addExercise = async (req, res) => {
    try {
        const body = await req.body 
        const exercise = await Exercise.create(body)
        res.status(200).send(exercise)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = { 
    getExercises,
    getExercise,
    addExercise
}
