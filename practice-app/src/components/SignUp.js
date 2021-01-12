import React, { Component } from "react";
import {  setUserCredentials } from "./Context/authContext";



class SignUp extends Component {
    state = {
        user: {
            username: '',
            password: ''
        },
        errorMessage: ""
    }

    handleChange = event => {

        const user = this.state.user
        if (event.target.name === "username") {
            user.username = event.target.value
        } else if (event.target.name === "password") {
            user.password = event.target.value
        }
        const state = this.state
        state.user = user
        this.setState(state);
    }

    getErrorMessageClass = () => {
        if (this.state.errorMessage) {
            return "alert alert-danger visible mt-3 text-center"
        } else {
            return "alert alert-danger invisible"
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        setUserCredentials(this.state.user);
        this.props.history.push("/")
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className={ this.getErrorMessageClass() } role="alert">
                        {this.state.errorMessage}
                    </div>
                    <div className="row justify-content-center">
                        <h1>Sign Up</h1>
                    </div>
                    <div>
                        <form method="post" action="/register" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label>Email </label>
                                <input className="form-control" type="email" name="username" onChange={this.handleChange} required ></input>
                            </div>
                            <div className="form-group">
                                <label>Password </label>
                                <input className="form-control" type="password" name="password" onChange={this.handleChange} required ></input>
                            </div>
                            <div>
                                <input className="btn btn-primary" type="submit" value="Register"></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default SignUp; 