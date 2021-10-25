import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom'


const PageTwo = ({ state, update, setState, setInitialRender }) => {
    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault();
        const user = {
            email: state.email,
            password: state.password,
            password2: state.password2,
            name: state.name,
            age: state.age,
            height: state.height,
            weight: state.weight
        }
        dispatch(signup(user))
        setInitialRender(false)
        setState({...state, page: 1})
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="signup-form">
                <br />
                <input type="text"
                    value={state.name}
                    onChange={update('name')}
                    placeholder="Name" />
                <br />
                <input type="number"
                    value={state.age}
                    onChange={update('age')}
                    placeholder="Age"
                />
                <br />
                <input type="text"
                    value={state.height}
                    onChange={update('height')}
                    placeholder="Height"
                />
                <br />
                <input type="number"
                    value={state.weight}
                    onChange={update('weight')}
                    placeholder="Weight"
                />
                <br />
                <button>Submit</button>
            </div>
        </form>
    )
}

export default withRouter(PageTwo);