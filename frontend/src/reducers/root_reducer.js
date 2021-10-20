import { combineReducers } from 'redux'

// const rootReducer = combineReducers({
//     entities: entitiesReducer,
//     session: sessionReducer,
//     errors: errorsReducer,
//     queue: queueReducer,
//     modal: modalReducer
// })

const defaultState = {} 

const rootReducer = (state = defaultState, action) => {
    Object.freeze(state) 
    switch (action.type) {
        default:
            return state
    }
}

export default rootReducer;