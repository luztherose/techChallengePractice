import React, { Component } from "react";
import Users from "./Users"
class Longin extends Component {
    render() {
        return(
            <div>
                <h1>LogIn Page</h1>
                <form>
                    <div>
                        <label>Email </label>
                        <input type="email "></input>
                        <label>Password </label>
                        <input type="password"></input>
                    </div>
                    <div>
                        <input type="submit" value="Sign in"></input>
                    </div>
                </form>
            </div>
        );
    }
}
export default Longin; 