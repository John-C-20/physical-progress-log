import { login } from '../../actions/session_actions';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

const LoginForm = props => {
  const [state, setState] = useState({email: '', password: '', errors: {}})
  const errors = useSelector(state => state.errors.session)
  const dispatch = useDispatch() 

  const update = field => {
    return e => setState({...state, [field]: e.currentTarget.value});
  }

  const handleSubmit = e => {
    e.preventDefault();
    const user = {email: state.email, password: state.password}
    dispatch(login(user))
  }

  const renderErrors = () => {
    return (
      <ul> 
        {Object.keys(state.errors).map((error, i)=> (
          <li key={`error-${i}`}>
            {state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" 
          value={state.email}
          onChange={update('email')}
          placeholder="Email"/>
          <br /> 
          
          <input type="password" 
          value={state.password}
          onChange={update('password')}
          placeholder="Password"/>
          <br /> 

          <input type="submit" value="Submit"/>
          {renderErrors()}
        </div>
      </form>
    </div>
  );
}

export default withRouter(LoginForm)