import { combineReducers } from 'redux'
import session from './session_api_reducer';


const rootReducer = combineReducers({
    //     entities: entitiesReducer,
    session
    //     errors: errorsReducer,
    //     queue: queueReducer,
    //     modal: modalReducer
})

// src/reducers/root_reducer.js

// const defaultState = {} 
// const rootReducer = (state = defaultState, action) => {
//     Object.freeze(state) 
//     switch (action.type) {
//         default:
//             return state
//     }
}

export default rootReducer;