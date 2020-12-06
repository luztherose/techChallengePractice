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
import AuthRoute from "./AuthRoute"
import { isUserLogged } from "./Context/authContext";
import { Redirect } from "react-router-dom";


class App extends Component {
  
  notLoggedRender =(Component, props) =>{
    if(!isUserLogged()) {
      return <Component {...props} />
    } else {
      return <Redirect to="/users" {...props} />
    }
  }

  render() {
    return (
      <main className="container-fluid">
        <Switch>
          <Route exact path="/" render={(props)=> this.notLoggedRender(LogIn, props) } />
          <Route path="/signup" render={(props)=> this.notLoggedRender(SignUp, props) } />
          <AuthRoute path="/users" redirectTo ="/" component={Users} />
          <AuthRoute path="/logout" redirectTo ="/" component={Logout} />
        </Switch>
      </main>
    );
  }
}

export default App;
