import React, {Component} from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';


class ToDoApp extends Component {
    render() {
        return (
            <div className={"ToDo"}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/welcome/:name" component={WelcomeComponent}></Route>
                        <Route path="/" exact component={Login}></Route>
                        <Route component={ErrorComponent}></Route>
                    </Switch>
                    {/*    <Route path="/welcome" element={<WelcomeComponent></WelcomeComponent>}></Route>*/}
                </BrowserRouter>
            </div>
        );
    }
}

class WelcomeComponent extends Component {
    render() {
        return (
            <div className={"ToDo"}>
                <div>Welcome {this.props.match.params.name}</div>
            </div>
        );
    }
}

class ErrorComponent extends Component {
    render() {
        return (
            <div className={"ToDo"}>
                <div>Error occured, not found!</div>
            </div>
        );
    }
}

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: 'in28minutes',
            password: '',
            hasLoginFailed: false
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleInputChange(event) {
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    loginClicked() {
        if (this.state.username === 'in28minutes' && this.state.password === 'dummy') {
            this.setState({
                hasLoginFailed: false
            })
            this.props.history.push(`/welcome/${this.state.username}`)
        } else {
            this.setState({
                hasLoginFailed: true
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.hasLoginFailed === true && <div>Invalid credentials</div>}
                {this.state.hasLoginFailed === false && <div>Login sucessful</div>}
                Username: <input type={"text"} name={"username"} value={this.state.username}
                                 onChange={this.handleInputChange}/>
                Password: <input type={"text"} name={"password"} value={this.state.password}
                                 onChange={this.handleInputChange}/>
                <button onClick={this.loginClicked}>Login</button>
            </div>
        );
    }
}

export default ToDoApp;
