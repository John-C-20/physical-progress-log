import { login } from '../../actions/session_actions';
import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

const LoginForm = props => {
  const [state, setState] = useState({email: '', password: '', errors: {}})
  const [initialRender, setInitialRender] = useState(true)
  const errors = useSelector(state => state.errors.session)
  const dispatch = useDispatch() 

  const update = field => {
    return e => setState({...state, [field]: e.currentTarget.value});
  }


  // Had a difficult time converting from componentWillReceiveProps
  // Implemented a solution using a boolean flag to only render errors if it's not the initial render
  useEffect(() => {
    if (!initialRender) setState({...state, errors: errors});
  }, [errors])

  const handleSubmit = async e => {
    e.preventDefault();
    const user = {email: state.email, password: state.password}
    dispatch(login(user))
    setInitialRender(false)
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

          <input type="submit" value="Login"/>
          {renderErrors()}
        </div>
      </form>
    </div>
  );
}

export default withRouter(LoginForm)
