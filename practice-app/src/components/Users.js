import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logout from "./LogOut";
import { isUserLogged, getAuthToken } from "./Context/authContext";

// This component will be available only for the users that are loged in
// This should include a list of all users
class Users extends Component {

    state = {
        "users": []
    }

    async fetchUsers() {
        const token = getAuthToken();
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        axios.get('http://51.38.51.187:3333/api/v1/users',
            config
        ).then(res => {
            this.setState({ "users": res.data })
        }).catch(error => {
            console.log(error)
        });
    }
    componentDidMount() {
        if (!isUserLogged()) {
            this.props.history.push("/");
        } else {
            this.fetchUsers();
        }
    }

    handleConfirmDelete = (id) => {
        if (window.confirm("Are you should you want to delete this entry?")) {
            this.handleDelete(id)
        }
    }

    handleDelete = (id) => {
        const token = getAuthToken();
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        axios.delete(`http://51.38.51.187:3333/api/v1/users/${id}`,
            config
        ).then(res => {
            const newUsers = this.state.users.filter((user) => user._id != id)
            this.setState({ "users": newUsers });
            alert("This entry has been deleted");
            console.log(res);
        }).catch(error => {
            console.log(error)
        });
    }

    render() {
        return (
            <div>
                <div>
                    <ul>
                        <li><Link to="/logout">Log out</Link></li>
                    </ul>
                </div>
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
                    {this.state.users.map(item => {
                        return (
                            <div className="userContainer" key={item._id}>
                                <div>
                                    <p>{item._id}</p>
                                </div>
                                <div>
                                    <p>{item.username}</p>
                                </div>
                                <div>
                                    <button onClick={ () => this.handleConfirmDelete(item._id)
                                    }>X</button>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        );
    }
}

export default Users;