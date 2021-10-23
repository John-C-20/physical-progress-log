import '../App.css';
import { Route, Switch, Link } from 'react-router-dom'
import Main from './main';
import Navbar from './navbar';
import WorkoutForm from "./forms/workout_form";
import LoginForm from "./forms/login_form";
import SignupForm from "./forms/signup_form";
import { AuthRoute, ProtectedRoute } from '../util/route_util';


function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Switch>
        <AuthRoute exact path="/" component={Main} />
        <AuthRoute path="/login" component={LoginForm} />
        <AuthRoute path="/signup" component={SignupForm} />
        <ProtectedRoute path="/new_workout" component={WorkoutForm} />
      </Switch>
    </div>
  );
}

export default App;

