import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/session_actions';
import { withRouter } from 'react-router';
import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = props => {
    const loggedIn = useSelector(state => state.session.isAuthenticated)
    const dispatch = useDispatch() 

    const logoutUser = (e) => {
        e.preventDefault();
        dispatch(logout());
    }

    const getLinks = () => {
        if (loggedIn) {
            return (
                <div>
                    <button onClick={logoutUser}>Logout</button>
                </div>
            )
        } else {
            return (
                <div>
                    <Link to="/signup">Signup</Link>
                    <Link to="/login">Login</Link>
                </div>
            )
        }
    }

    return (
        <div className="navbar">
            <h1>Physical Progress Logger</h1>
            {getLinks()}
        </div>
    )
}

export default withRouter(NavBar)