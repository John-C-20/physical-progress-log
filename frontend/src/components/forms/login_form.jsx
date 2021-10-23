import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  // Once the user has been authenticated, redirect to the main page
  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    if (nextProps.currentUser === true) {
      this.props.history.push('/new_workout');
    }

    // Set or clear errors
    this.setState({ errors: nextProps.errors })
  }

  // Handle field updates (called in the render method)
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user);
  }

  // Render the session errors if there are any
  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email"
            />
            <br />
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
            />
            <br />
            <input type="submit" value="Submit" />
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: user => dispatch(login(user))
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm));





// const loginForm = props => {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [errors, setErrors] = useState({})
//   const user = useSelector(state => state.session.user)

//   useEffect(() => {
//     if (user) {
//       props.history.push('/');
//       setErrors(error)
//     }
//     console.log('property changed', user, error);
//   }, [user, errors])
  
// }