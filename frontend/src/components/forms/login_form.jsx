import { login } from '../../actions/session_actions';
import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

const LoginForm = props => {
  const [state, setState] = useState({email: '', password: '', errors: {}})
  const errors = useSelector(state => state.errors.session)
  const currentUser = useSelector(state => state.session.user)
  const dispatch = useDispatch() 

  const update = field => {
    return e => setState({...state, [field]: e.currentTarget.value});
  }

  useEffect(() => {
    // fix this 
    setState({...state, errors: errors})
  }, [errors])

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

          <input type="submit" value="Login"/>
          {renderErrors()}
        </div>
      </form>
    </div>
  );
}

export default withRouter(LoginForm)

// ----------------------------------------------------------------------------

// import React from 'react';
// import { withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { login } from '../../actions/session_actions';

// class LoginForm extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       email: '',
//       password: '',
//       errors: {}
//     };

//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.renderErrors = this.renderErrors.bind(this);
//   }

  // Once the user has been authenticated, redirect to the Tweets page
  // componentWillReceiveProps(nextProps) {
  //   this.setState({ errors: nextProps.errors })
  // }

//   // Handle field updates (called in the render method)
//   update(field) {
//     return e => this.setState({
//       [field]: e.currentTarget.value
//     });
//   }

//   // Handle form submission
//   handleSubmit(e) {
//     e.preventDefault();

//     let user = {
//       email: this.state.email,
//       password: this.state.password
//     };

//     this.props.login(user);
//   }

//   // Render the session errors if there are any
//   renderErrors() {
//     return (
//       <ul>
//         {Object.keys(this.state.errors).map((error, i) => (
//           <li key={`error-${i}`}>
//             {this.state.errors[error]}
//           </li>
//         ))}
//       </ul>
//     );
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <div>
//             <input type="text"
//               value={this.state.email}
//               onChange={this.update('email')}
//               placeholder="Email"
//             />
//             <br />
//             <input type="password"
//               value={this.state.password}
//               onChange={this.update('password')}
//               placeholder="Password"
//             />
//             <br />
//             <input type="submit" value="Submit" />
//             {this.renderErrors()}
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     errors: state.errors.session
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     login: user => dispatch(login(user))
//   }
// }

// export default withRouter(connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(LoginForm));