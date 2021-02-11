import Hello from "../src/components/hello"
import About from "../src/components/About"
import Portfolio from "../src/components/Portfolio"
import Contact from "../src/components/Contact"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/hello.css"
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

        <Route exact path = "/portfolio" >
          < Portfolio />
        </Route>

        <Route exact path ="/contact">
          < Contact />
        </Route>


      </div>
    </Router>

  );
}

export default App;
