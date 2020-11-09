import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route
}from 'react-router-dom';
import '../styles/App.scss';
import LogIn from "./LogIn";
import SignUp from "./SignUp"


class App extends Component {
  render() {
    return (
      <Router>
        <div className="app wrapper">
          <Route exact path="/" component={LogIn} />
          <Route path="/signup" component={SignUp} />
        </div>
      </Router>
    );
  }
}

export default App;
