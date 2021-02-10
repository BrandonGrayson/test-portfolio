import Hello from "../src/components/hello"
import About from "../src/components/About"
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

      

      </div>
    </Router>

  );
}

export default App;
