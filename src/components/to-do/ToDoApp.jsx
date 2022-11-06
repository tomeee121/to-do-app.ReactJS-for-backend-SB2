import React, {Component} from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import bootstrap from './bootstrap.css'
import ToDo from './ToDo.css'
import AuthenticationService from "./AuthenticationService";


class ToDoApp extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <HeaderComponent></HeaderComponent>
                    <Switch>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/welcome/:name" component={WelcomeComponent}></Route>
                        <Route path="/todos" component={ToDoComponent}></Route>
                        <Route path="/logout" component={LogoutComponent}></Route>
                        <Route path="/" exact component={Login}></Route>
                        <Route component={ErrorComponent}></Route>
                    </Switch>
                    <FooterComponent></FooterComponent>
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
                <div>Welcome {this.props.match.params.name}. To manage your todos go here <Link
                    to={"/todos"}>click</Link></div>
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

class HeaderComponent extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <ul className="navbar-nav">
                        <li><Link to={"/welcome/Tomek"} className={"nav-link"}>Home</Link></li>
                        <li><Link to={"/todos"} className={"nav-link"}>Todos</Link></li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li><Link to={"/login"} className={"nav-link"}>Login</Link></li>
                        <li onClick={AuthenticationService.registerLogout}><Link to={"/logout"} className={"nav-link"}>Logout</Link></li>
                    </ul>
                </nav>
                <hr></hr>
            </header>
        );
    }
}

class FooterComponent extends Component {
    render() {
        return (
            <footer className="footer-todo">
                in28minutes all rights reserved
                <hr className={"hr"}></hr>
            </footer>
        );
    }
}

class ToDoComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos:
                [
                    {id: 1, description: 'Learn React', done: false, targetDate: new Date()},
                    {id: 2, description: 'Visit India', done: false, targetDate: new Date()},
                    {id: 3, description: 'Dance course', done: false, targetDate: new Date()},
                ]
        }
    }

    render() {
        return (
            <div>
                <div className={"container"}>
                <h1>To-do'sy</h1>
                <table className={"table"}>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>description</th>
                        <th>Is completed?</th>
                        <th>Finish date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.todos.map(todo =>
                            <tr>
                                <td>{todo.id}</td>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate.toString()}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
                </div>
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

class LogoutComponent extends Component {
    render() {
        return (
            <div>
                <h1>You are logged out</h1>
                <div className={"container"}>
                    Thank you for using the app!
                </div>
            </div>
        );
    }
}

export default ToDoApp;
