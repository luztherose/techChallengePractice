import React, {Component} from "react";
import axios from 'axios';

class SignUp extends Component {
    state = {
        username: '',
        password: ''
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log("working!")
        // const user = {
        //     username: this.state.name,
        //     password: this.state.name
        // };

        // axios.post(`http:///api/v1/auth/register`, { user })
        // .then(res => {
        // console.log(res);
        // console.log(res.data);
        // })
    }

    render() {
        return(
            <div className="formContainer">
                <h1>Sign Up</h1>
                <form method="post" action="/register">
                    <div>
                        <label>Email </label>
                        <input type="email" name="username"></input>
                        <label>Password </label>
                        <input type="password" name="password"></input>
                    </div>
                    <div>
                        <input type="submit" value="Register" onClick={this.handleSubmit} ></input>
                    </div>
                </form>
            </div>
        );
    }
}
export default SignUp ; 