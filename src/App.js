import Hello from "../src/components/hello"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    <Router>
      <div>

        <Route path="/">
        < Hello />
        </Route>

        <Hello />
      </div>
    </Router>

  );
}

export default App;
