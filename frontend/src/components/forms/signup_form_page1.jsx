import React from 'react';

const PageOne = ({ state, update, setState }) => {
    const handleSubmit = e => {
        e.preventDefault();
        setState({...state, page: 2})
    }

    return(
    <form onSubmit={handleSubmit}>
        <div className="signup-form">
            <br />
            <input type="text"
                value={state.email}
                onChange={update('email')}
                placeholder="Email" />
            <br />
            <input type="password"
                value={state.password}
                onChange={update('password')}
                placeholder="Password"
            />
            <br />
            <input type="password"
                value={state.password2}
                onChange={update('password2')}
                placeholder="Confirm Password"
            />
            <br />
            <button>Next</button>
        </div>
    </form>
    )
}

export default PageOne;