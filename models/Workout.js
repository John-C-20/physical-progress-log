const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ExerciseSchema } = require("./Exercise");

const WorkoutSchema = new Schema ({
    date: {type: Date, default: Date()},
    exercises: [ ExerciseSchema ], // embedded document
    user_id: {type: Schema.ObjectId, ref: 'User'} 
})

module.exports = mongoose.model("Workout", WorkoutSchema); // exports Workout model