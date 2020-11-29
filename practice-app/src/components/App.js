import React, { Component } from "react";
import {
  Route,
  Switch
} from 'react-router-dom';
import '../styles/App.scss';
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Users from "./Users";


class App extends Component {
  render() {
    return (
      <main className="app wrapper">
        <Switch>
          <Route exact path="/" component={LogIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/users" component={Users} />
        </Switch>
      </main>
    );
  }
}

export default App;
