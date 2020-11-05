import React, {Component} from "react";
// This component will be available only for the users that are loged in
// This should include a list of all users
class Users extends Component {
    render() {
        return(
            <div>
                <h1> Users Page</h1>
                <p>List of Users</p>
            </div>
        );
    }
}

export default Users;