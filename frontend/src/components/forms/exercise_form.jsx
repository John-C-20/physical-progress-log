import React, { useState, useEffect } from 'react';
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SaveIcon from '@mui/icons-material/Save';
import TextField from '@material-ui/core/TextField';
import Button from "@mui/material/Button";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ExerciseForm = ({ workoutState, setWorkoutState, open, handleClose }) => {
    const defaultState = {
        name: '',
        sets: 0,
        reps: 0,
        weight: 0
    }

    const [state,setState] = useState(defaultState)

    const update = field => {
        return e => setState({...state, [field]: e.currentTarget.value})
    }

    const saveExercise = e => {
        e.preventDefault();
        const exercises = workoutState.exercises
        exercises.push(state)
        setWorkoutState({...workoutState, exercises: exercises})
        setState(defaultState)
        handleClose();
    }

    return(
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <form className="exercise-form">
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        New Exercise
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                    <TextField id="standard-basic" label="Exercise Name" onChange={update('name')}/>
                    <br />
                    <TextField id="standard-basic" label="Weight" onChange={update('weight')} />
                    <br />
                    <TextField id="standard-basic" label="Sets" onChange={update('sets')}/>
                    <br />
                    <TextField id="standard-basic" label="Reps" onChange={update('reps')}/>
                    <br />
                    <Button startIcon={<SaveIcon />} onClick={saveExercise} variant="contained">Save</Button>
                </form>
            </Box>
        </Modal>
    )   
}
export default ExerciseForm;