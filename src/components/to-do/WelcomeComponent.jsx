import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class WelcomeComponent extends Component {
    render() {
        return (
            <div className={"ToDo"}>
                <div>Welcome {this.props.match.params.name}. To manage your todos go here <Link
                    to={"/todos"}>click</Link></div>
            </div>
        );
    }
}