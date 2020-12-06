import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { isUserLogged } from "./Context/authContext";


class AuthRoute extends Component {
    render() {
        return (<Route path={this.props.path} render={
            (props) => {
                if (isUserLogged()) {
                    const Component = this.props.component
                    return <Component {...props} />
                } else {
                    return <Redirect to={this.props.redirectTo} />
                }
            }
        } />)
    }
}


export default AuthRoute;
