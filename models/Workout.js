const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema ({
    date: {type: Date, default: Date()},
    exercises: [{ type: Schema.ObjectId, ref: 'Exercise' }] // embedded document
})

module.exports = mongoose.model("Workout", WorkoutSchema); // exports Workout model