import React, { Component } from "react";
import {
  Route,
  Switch
} from 'react-router-dom';
import '../styles/App.scss';
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Users from "./Users";
import Logout from "./LogOut"


class App extends Component {
  render() {
    return (
      <main className="app wrapper">
        <Switch>
          <Route exact path="/" component={LogIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/users" component={Users} />
          <Route path="/logout" component={Logout} />
        </Switch>
      </main>
    );
  }
}

export default App;
