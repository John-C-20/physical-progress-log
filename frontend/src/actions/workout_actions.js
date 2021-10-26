import * as Workout_API_Util from '../util/workout_api_util';

export const GET_WORKOUTS = 'GET_WORKOUTS'
export const ADD_WORKOUT = 'ADD_WORKOUT'

const fetchUserWorkouts = (workouts) => ({
    type: GET_WORKOUTS,
    workouts
})

const addWorkout = (workout) => ({
    type: ADD_WORKOUT,
    workout
})

export const getUserWorkouts = (user_id) => dispatch => (
    Workout_API_Util.getUserWorkouts(user_id)
    .then(workouts => dispatch(fetchUserWorkouts(workouts.data)))
    .catch(err => console.log(err))
)

export const createWorkout = workoutData => dispatch => (
    Workout_API_Util.createWorkout(workoutData)
    .then(workout=> dispatch(addWorkout(workout)))
    .catch(err => console.log(err))
)
