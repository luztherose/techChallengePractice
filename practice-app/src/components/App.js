import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route, Link
}
  from 'react-router-dom';
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
        {/* <h1>Sign In to Continue...</h1> */}
          {/* <Login />
          <SignUp /> */}
          
          <Route exact path="/"  component={ Login } />
          {/* <Link to="/signup">Sign up</Link> */}
          <Route path="/signup" component={ SignUp } />
          {/* <Route path="/users"  component={Users} />
          <Route path="/logout" component={LogOut} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
