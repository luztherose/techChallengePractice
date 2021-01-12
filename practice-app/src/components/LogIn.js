import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getUserCredentials } from "./Context/authContext";

class Longin extends Component {
    state = {
        user: {
            username: '',
            password: ''
        },
        errorMessage: ""
    }

    handleChange = (event) => {
        const user = this.state.user;
        const credentials = event.target.name;
        if (credentials === "userEmail") {
            user.username = event.target.value;
        } else if (credentials === "password") {
            user.password = event.target.value;
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

    handleSubmit = (event) => {
        event.preventDefault();
        getUserCredentials();
        //this.props.history.push("/users");
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className={this.getErrorMessageClass()} role="alert">
                        {this.state.errorMessage}
                    </div>
                    <div className="row justify-content-center">
                        <h1>Sign In</h1>
                    </div>
                    <div>
                        <form method="post" action="/login" onSubmit={this.handleSubmit} >
                            <div className="form-group">
                                <label>Email Address </label>
                                <input className="form-control" type="email" name="userEmail" placeholder="johnsmith@gmail.com" onChange={this.handleChange} required ></input>
                            </div>
                            <div className="form-group">
                                <label>Password </label>
                                <input className="form-control" type="password" name="password" onChange={this.handleChange} required ></input>
                            </div>
                            <input className="btn btn-primary" type="submit" value="Sign In!" ></input>
                        </form>
                    </div>
                    <div className="row justify-content-center">
                        <p>Please Sign Up!</p>
                        <ul>
                            <li><Link to="/signup">Sign up</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
export default Longin; 