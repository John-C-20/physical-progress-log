import '../App.css';
import { Route, Switch, Link } from 'react-router-dom'
import Main from './main';
import Navbar from './navbar';
import WorkoutForm from "./workoutForm";


function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/new_workout" component={WorkoutForm} />
      </Switch>
    </div>
  );
}

export default App;

