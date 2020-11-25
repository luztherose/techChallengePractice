import React, { Component } from "react";
import {
  HashRouter,
  Route
}from 'react-router-dom';
import '../styles/App.scss';
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Users from "./Users"


class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div className="app wrapper">
          <Route exact path="/" component={LogIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/users" component={Users} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
