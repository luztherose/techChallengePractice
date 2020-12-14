import React, {Component} from "react";
import { logout } from "./Context/authContext";


class LogOut extends Component {
    
    handleLogOut = () => {
        logout();
        this.props.history.push("/");
        
    }

    render() {
        return(
            <div className="container ">
                <div>
                    <div className="row justify-content-center ">
                        <h1 className="mt-5 mb-4">Log Out Page</h1>
                    </div>
                    <div className="row justify-content-center">
                        <button className="btn btn-secondary btn-lg" onClick={this.handleLogOut}>Sing out</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default LogOut;
