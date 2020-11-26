import axios from "axios";
import React, { Component } from "react";
// This component will be available only for the users that are loged in
// This should include a list of all users
class Users extends Component {

    state = {
        "users": [ ]
    }
    
    async fetchUsers()  {
        const token = localStorage.getItem("token");
        const config = {
            headers: {
                "Authorization": `Bearer ${token}` 
            }
        }
        axios.get('http://51.38.51.187:3333/api/v1/users',
        config
        ).then(res => {
            this.setState({"users": res.data })
        }).catch(error => {
            console.log(error)
        });
    }
    componentDidMount(){
        this.fetchUsers();
    }

    render() {
        return (
            <div>
                <h1> Users Page</h1>
                <p>List of Users</p>
                <div className="userContainer">
                    <div>
                        <p>Ids</p>
                    </div>
                    <div>
                        <p>users</p>
                    </div>
                </div>
                { this.state.users.map(item => {
                    return (
                        <div className="userContainer" key={item._id}>
                            <div>
                                <p>{item._id}</p>
                            </div>
                            <div>
                                <p>{item.username}</p>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        );
    }
}

export default Users;