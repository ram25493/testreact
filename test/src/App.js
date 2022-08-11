import "./App.css";
import Parent from "./Parent";
import Formexample from "./Formexample";
import React from "react";
import Books from "./Books";
import Antform from "./Antform";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //   <Parent />
    //   <Formexample />
    //   <Books />
    // </div>
    <Router>
      <div className="App">
        <div className="nav">
          {/* <Link to="/">Counter</Link> */}
          <NavLink to="/">Counter</NavLink>

          {/* <Link to="/formexample">Form Example</Link> */}
          <NavLink to="/formexample">Form Example</NavLink>

          {/* <Link to="/books">Books</Link> */}
          <NavLink to="/books">Books</NavLink>
          <NavLink to="/antform">AntD Form</NavLink>


          <Routes>
            <Route exact path="/" element={<Parent />}></Route>
            <Route exact path="/formexample" element={<Formexample />}></Route>
            <Route exact path="/books" element={<Books />}></Route>
            <Route exact path="/antform" element={<Antform />}></Route>

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
