import React, { Component } from "react";
import {
  HashRouter,
  Route
}from 'react-router-dom';
import '../styles/App.scss';
import LogIn from "./LogIn";
import SignUp from "./SignUp"


class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div className="app wrapper">
          <Route exact path="/" component={LogIn} />
          <Route path="/signup" component={SignUp} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
