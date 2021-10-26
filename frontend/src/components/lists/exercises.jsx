import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector }  from 'react-redux'

const ExerciseList = ( {exercises} ) => {
    const list = exercises.map((ele, idx) => (
        <div key={`exercise-${idx}`}>
            <ul>
                <li>Exercise: {ele.name}</li>
                <li>Weight: {ele.weight}</li>
                <li>Sets: {ele.sets}</li>
                <li>Reps: {ele.reps}</li>
            </ul>
        </div>
    ))

    return(list)
}

export default ExerciseList;