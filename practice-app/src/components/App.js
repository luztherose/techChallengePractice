import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route, Link
}from 'react-router-dom';
import LogIn from "./LogIn";
import '../styles/App.scss';
import Login from "./LogIn";
import Users from "./Users"
import SignUp from "./SignUp"
import LogOut from "./LogOut"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app wrapper">
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={SignUp} />
        </div>
      </Router>
    );
  }
}

export default App;
