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
                <div className="linkToLogout">
                    <ul>
                        <li><Link to="/logout">Log out</Link></li>
                    </ul>
                </div>
                <div class="container">
                    <div class="row">
                        <h1 className="centerElements">List of Users</h1>
                    </div>
                    <div class="row">
                        <div class="col-sm alignLeft ">
                            <h2>Ids</h2>
                        </div>
                        <div class="col-sm alignLeft">
                            <h2 className="marginLeft">Emails</h2>
                        </div>
                    </div>
                </div>
                {this.state.users.map(item => {
                    return (
                        <div className="row" key={item._id}>
                            <div class="col-sm">
                                <p>{item._id}</p>
                            </div>
                            <div class="col-sm">
                                <p>{item.username}</p>
                            </div>
                            <div class="col-sm">
                                <button onClick={() => this.handleConfirmDelete(item._id)
                                }>X</button>
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