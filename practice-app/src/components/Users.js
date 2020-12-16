import axios from "axios";
import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Logout from "./LogOut";
import { isUserLogged, getAuthToken } from "./Context/authContext";

// This component will be available only for the users that are loged in
// This should include a list of all users
class Users extends Component {

    state = {
        "users": [],
        "usersPaged": []
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
            this.state.users = res.data
            this.setState(this.state);

            this.showNextPage();
        }).catch(error => {
            console.log(error)
        });
    }

    showNextPage() {
        let usersDisplayed = this.state.usersPaged.length;
        this.state.usersPaged.splice(0, this.state.usersPaged.length);
        for (let i = usersDisplayed; i < usersDisplayed + 10; i++) {
            this.state.usersPaged.push(this.state.users[i])
        }
        this.setState(this.state);
        
    }

    componentDidMount() {
        this.fetchUsers();
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
            <div >
                <div className="linkToLogout">
                    <ul>
                        <li><Link to="/logout">Log out</Link></li>
                    </ul>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <h1 className="userHeading shadow p-3 mb-5 bg-white rounded">List of Users</h1>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <h2>Ids</h2>
                        </div>
                        <div className="col-sm">
                            <h2 className="ml-n5">Emails</h2>
                        </div>
                    </div>
                </div>

                {this.state.usersPaged.map(item => {
                    return (
                        <div className="row centerContent" key={item._id}>
                            <div className="col-sm ">
                                <p>{item._id}</p>
                            </div>
                            <div className="col-sm ">
                                <p>{item.username}</p>
                            </div>
                            <div className="col-sm ">
                                <button className="btn btn-outline-danger" onClick={() => this.handleConfirmDelete(item._id)
                                }>X</button>
                            </div>
                        </div>
                    )
                })
                }
                <div className="d-flex justify-content-center mt-3 mb-5">
                    <button className="btn btn-secondary mr-4">Previous</button>
                    <button className="btn btn-success" onClick={() => this.showNextPage()}>Next</button>
                </div>
                
            </div>
        );
    }
}

export default Users;