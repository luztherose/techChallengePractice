import React, {Component} from "react";

class SignUp extends Component {
    render() {
        return(
            <div className="formContainer">
                <h1>Sign Up</h1>
                <form>
                    <div>
                        <label>Email </label>
                        <input type="email"></input>
                        <label>Password </label>
                        <input type="password"></input>
                    </div>
                    <div>
                        <input type="submit" value="Register"></input>
                    </div>
                </form>
            </div>
        );
    }
}
export default SignUp ; 