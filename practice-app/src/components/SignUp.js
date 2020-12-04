import React, {Component} from "react";
import axios from 'axios';


class SignUp extends Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = event => {

        const user = this.state
        if(event.target.name === "username"){
            user.username = event.target.value
        } else if(event.target.name === "password"){
            user.password = event.target.value
        }
        this.setState(user);
    }

    handleSubmit = event => {
        event.preventDefault();
        const user = this.state;
        axios.post(`http://51.38.51.187:3333/api/v1/auth/register`, user )
        .then(res => {
        // handle success
        alert("Sign up successful!");
        this.props.history.push("/")  
        }).catch(function (error) {
            alert(error.response.data.message);
            console.error(error);
        });
    }

    render() {
        return(
            <div className="formContainer">
                <h1>Sign Up</h1>
                <form method="post" action="/register" onSubmit={ this.handleSubmit }>
                    <div>
                        <label>Email </label>
                        <input type="email" name="username" onChange={this.handleChange} required ></input>
                        <label>Password </label>
                        <input type="password" name="password" onChange={this.handleChange} required ></input>
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