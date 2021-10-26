import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import ExerciseForm from './exercise_form';
import ExerciseList from '../lists/exercises';
import { createWorkout } from '../../actions/workout_actions';

const WorkoutForm = (props) => {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const currentUserId = useSelector(state => state.session.user.id)
    const [state, setState] = useState({
        exercises: [],
        user_id: currentUserId
    })

    const saveWorkout = async e => {
        e.preventDefault();
        dispatch(createWorkout(state))
        props.history.push('/')
    }

    return (
        <div className="workout-form">
            <Button variant="contained" onClick={handleOpen}>Add Exercise</Button>
            <ExerciseForm workoutState={state} workoutState={state} setWorkoutState={setState} open={open} handleClose={handleClose} /> 
            <ExerciseList exercises={state.exercises}/>
            <Button variant="contained" onClick={saveWorkout}>Save Workout</Button>
        </div>
    )
}

export default WorkoutForm;

