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

        <Route exact path="/">
        < Hello />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>


      </div>
    </Router>

  );
}

export default App;
