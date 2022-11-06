import React, {Component} from "react";
import {Link} from "react-router-dom";
import bootstrap from './css/bootstrap.css'

export default class WelcomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.retrieveWelcomeMsg = this.retrieveWelcomeMsg.bind(this)
    }

    render() {
        return (
            <div className={"ToDo"}>
                <div>Welcome {this.props.match.params.name}. To manage your todos go here -
                    <Link to={"/todos"} style={{margin: '10px 6px'}}>click</Link></div>
                {/*<div className={"container"}>*/}
                {/*    Click here to get a cutomized welcome message.*/}
                {/*    <button onClick={this.retrieveWelcomeMsg} className="btn btn-primary">Get Welcome msg</button>*/}
                {/*</div>*/}
            </div>
        );
    }

    retrieveWelcomeMsg() {
        console.log('retrieved')
    }
}