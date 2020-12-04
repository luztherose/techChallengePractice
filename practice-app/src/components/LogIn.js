import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { isUserLogged, setAuthToken, getAuthToken, logout } from "./Context/authContext";

class Longin extends Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = (event) => {
        const user = this.state;
        const credentials = event.target.name;
        if (credentials === "userEmail") {
            user.username = event.target.value;
        } else if (credentials === "password") {
            user.password = event.target.value;
        }

        this.setState(user);
    }

    handleSubmit = (event) => {
        event.preventDefault();

        axios.post(`http://51.38.51.187:3333/api/v1/auth/login`, this.state).then(res => {
            setAuthToken(res.data.accessToken);
            this.props.history.push("/users");
        }).catch(error => {
            alert(error.response.data.message);
            console.log(error);
        })
    }

    render() {
        // return (
        //     <AuthConsumer>
        //         {
        //             auth => {
        // console.log(logout())
        // console.log(typeof(getAuthToken()) )
        // console.log(getAuthToken() !== null)
        // debugger
        if (isUserLogged()) {
            this.props.history.push("/users");
        }
        // }
        // }
        return (
            <div>
                <div className="container">
                    <div className="row justify-content-center">
                        <h1>Sign In</h1>
                    </div>
                    <div>
                        <form method="post" action="/login" onSubmit={this.handleSubmit} >
                            <label>Email Address </label>
                            <input type="email" name="userEmail" placeholder="johnsmith@gmail.com" onChange={this.handleChange} required ></input>
                            <label>Password </label>
                            <input type="password" name="password" onChange={this.handleChange} required ></input>
                            <input type="submit" value="Sign In!" ></input>
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
        {/* </AuthConsumer>
        ) */}
    }
}
export default Longin; 