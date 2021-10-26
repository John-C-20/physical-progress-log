import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getUserWorkouts } from '../actions/workout_actions';

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button"



const Main = (props) => {
    const dispatch = useDispatch(); 
    const workouts = useSelector(state => state.workouts)
    const currentUserId = useSelector(state => state.session.user.id)

    useEffect(() => {
        dispatch(getUserWorkouts(currentUserId))
    }, [])
    
    const workoutList = workouts.map(workout => {
        const id = workout._id 
        const date = workout.date
        let exercises;
        if (workout.exercises) {
            exercises = workout.exercises.map(exercise => (
                <div>
                    <div>{exercise.name}</div>
                    <div>{exercise.weight}</div>
                    <div>{exercise.sets}</div>
                    <div>{exercise.reps}</div>
                </div>
            ));
        }

        return(
            <Card variant="outlined">
                <CardContent>
                    {exercises} 
                    <Typography sx={{fontSize:14}}>Date: {date}</Typography>
                </CardContent>
            </Card>
        )
    })

    return( 
        <div className="main">
            <Link to="/new_workout">
                <Button variant="contained">New Workout</Button>
            </Link>
            {workoutList}
        </div>
    )
}

export default Main;

