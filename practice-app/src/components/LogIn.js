import React, { Component } from "react";
import Users from "./Users"
class Longin extends Component {
    render() {
        return (
            <div className="loginContainer">
                <h1>Sign In</h1>
                <form >
                    <label>Email Address </label>
                    <input type="email"></input>
                    <label>Password </label>
                    <input type="password"></input>
                    <input type="submit" value="Sign In!"></input>
                </form>
            </div>
        );
    }
}
export default Longin; 