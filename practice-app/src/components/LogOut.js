import React, {Component} from "react";
import { logout } from "./Context/authContext";


class LogOut extends Component {
    
    handleLogOut = () => {
        logout();
        this.props.history.push("/");
        
    }

    render() {
        return(
            <div>
                <h1>Log Out Page</h1>
                <button onClick={this.handleLogOut}>Sing out</button>
            </div>
        );
    }
}

export default LogOut;
