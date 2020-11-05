import React, { Component } from "react";
import { 
  BrowserRouter as Router, 
  Route, Link } 
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
          <div className="app">
          <h1>Welcome Page</h1>
          <Login />
          <Link to="/signup">Sign up</Link>
          {/* <Route path="/login"  component={Login} /> */}
          <Route path="/signup" component={SignUp} />
          <Route path="/users"  component={Users} />
          <Route path="/logout" component={LogOut} />
        </div>
      </Router>
    );
  }
}

export default App;
