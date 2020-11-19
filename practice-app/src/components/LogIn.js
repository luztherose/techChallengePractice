import React, { Component } from "react";
import {Link} from "react-router-dom";

class Longin extends Component {
    render() {
        return (
            <div className="formContainer">
                <h1>Sign In</h1>
                <form method="post" action="/login">
                    <label>Email Address </label>
                    <input type="email"name="userEmail" placeholder="johnsmith@gmail.com"></input>
                    <label>Password </label>
                    <input type="password" name="password"></input>
                    <input type="submit" value="Sign In!"></input>
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