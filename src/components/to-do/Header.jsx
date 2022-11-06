import React, {Component} from 'react';
import AuthenticationService from "./AuthenticationService";
import {Link} from "react-router-dom";
import {withRouter} from "react-router";

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {reload: false}
        this.onHeaderClicked = this.onHeaderClicked.bind(this)
    }

    onHeaderClicked() {
        this.setState({
            reload: true
        })
    }

    render() {
        let isUserLoggedIn = AuthenticationService.isUserLoggedIn()

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li><Link to={"/welcome/Tomek"} className={"nav-link"}>Home</Link></li>}
                        {isUserLoggedIn && <li><Link to={"/todos"} className={"nav-link"}>Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link to={"/login"} className={"nav-link"}>Login</Link></li>}
                        {isUserLoggedIn && <li onClick={AuthenticationService.registerLogout}><Link to={"/logout"} className={"nav-link"}>Logout</Link></li>}
                    </ul>
                </nav>
                <hr></hr>
            </header>
        );
    }
}
export default withRouter(HeaderComponent);