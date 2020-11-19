import React, {Component} from "react";
import axios from 'axios';

class SignUp extends Component {
    state = {
        userName: '',
        password: ''
    }

    handleChange = event => {
        this.setState(
            { 
                userName: event.target.value, 
                userPassword:event.target.value
            
            });
    }

    handleSubmit = event => {
        event.preventDefault();
        //console.log("working!")
        
        const user = {
            userName: this.state.userName,
            password: this.state.userPassword
        };
        console.log(user)
        // axios.post(`http://api/v1/auth/register`, { user })
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
                        <input type="email" name="username" onChange={this.handleChange}></input>
                        <label>Password </label>
                        <input type="password" name="password" onChange={this.handleChange}></input>
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