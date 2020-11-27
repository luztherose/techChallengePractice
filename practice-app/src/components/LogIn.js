import axios from "axios";
import React, { Component } from "react";
import {Link} from "react-router-dom";

class Longin extends Component {
    state = {
        username: '',
        password: '' 
    }

    handleChange = (event) => {
        const user = this.state;
        const credentials = event.target.name;
        if(credentials === "userEmail") {
            user.username = event.target.value;
        }else if(credentials === "password") {
            user.password = event.target.value;
        }

        this.setState(user);
    }

    handleSubmit = (event) => {
        event.preventDefault();

        axios.post(`http://51.38.51.187:3333/api/v1/auth/login`, this.state).then(res => {
            localStorage.setItem('token', res.data.accessToken);
            this.props.history.push("/users");
        }).catch(error => {
            alert(error.response.data.message);
            console.log(error);
        })
    }

    render() {
        if(localStorage.getItem('token') !== null) {
            this.props.history.push("/users");
        }

        return (
            <div className="formContainer">
                <h1>Sign In</h1>
                <form method="post" action="/login">
                    <label>Email Address </label>
                    <input type="email"name="userEmail" placeholder="johnsmith@gmail.com" onChange={this.handleChange}></input>
                    <label>Password </label>
                    <input type="password" name="password" onChange={this.handleChange}></input>
                    <input type="submit" value="Sign In!" onClick={this.handleSubmit}></input>
                </form>
                <div>
                    <p>Please Sign Up!</p>
                    <ul>
                        <li><Link to="/signup">Sign up</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default Longin; 