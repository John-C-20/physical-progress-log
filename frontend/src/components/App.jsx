import '../App.css';
import { Route, Switch, Link } from 'react-router-dom'
import Dashboard from './dashboard';
import WorkoutForm from "./workoutForm";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/new_workout" component={WorkoutForm} />
      </Switch>
    </div>
  );
}

export default App;

