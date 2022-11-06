import React, {Component} from "react";
import AuthenticationService from "./AuthenticationService";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: 'in28minutes',
            password: '',
            hasLoginFailed: true
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
            AuthenticationService.registerSucessfulLogin(this.state.username)
            this.props.history.push(`/welcome/${this.state.username}`)
        } else {
            this.setState({
                hasLoginFailed: true
            })
        }
    }

    render() {
        return (
            <div className={"ToDo"}>
                <h1>Login: </h1>
                {/*{this.state.hasLoginFailed === true && <div>Invalid credentials</div>}*/}
                {this.state.hasLoginFailed === false && <div>Login sucessful</div>}
                Username: <input type={"text"} name={"username"} value={this.state.username}
                                 onChange={this.handleInputChange}/>
                Password: <input type={"text"} name={"password"} value={this.state.password}
                                 onChange={this.handleInputChange}/>
                <button className={"btn btn-sucessful"} onClick={this.loginClicked}>Login</button>
            </div>
        );
    }
}

export default Login;