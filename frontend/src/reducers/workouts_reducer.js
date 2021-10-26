import { GET_WORKOUTS, ADD_WORKOUT } from '../actions/workout_actions';

const workoutsReducer = (state = [], action) => {
    Object.freeze(state) 
    switch (action.type) {
        case GET_WORKOUTS:
            return action.workouts
        case ADD_WORKOUT: 
            const newState = state.slice(0)
            newState.push(action.workout)
            console.log(newState)
            return newState
        default: 
            return state
    }
}

export default workoutsReducer;