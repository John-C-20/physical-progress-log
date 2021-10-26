import axios from 'axios';

export const createWorkout = (formData) => {
    return axios.post('/api/workouts/', formData)
}

export const getUserWorkouts = (user_id) => {
    return axios.get('/api/workouts', {params: {user_id: user_id}})
}