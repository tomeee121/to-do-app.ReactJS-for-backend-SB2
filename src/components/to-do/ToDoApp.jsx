import React, {Component} from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import bootstrap from './bootstrap.css'
import ToDo from './ToDo.css'
import AuthenticationService from "./AuthenticationService";
import Login from './Login'
import HeaderComponent from "./Header";
import AuthenticatedRoute from "./AuthenticatedRoute";


class ToDoApp extends Component {
    render() {
        return (
            <div>
                <BrowserRouter><>
                    <HeaderComponent></HeaderComponent>
                    <Switch>
                        <Route path="/login" component={Login}></Route>
                        <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}></AuthenticatedRoute>
                        <AuthenticatedRoute path="/todos" component={ToDoComponent}></AuthenticatedRoute>
                        <AuthenticatedRoute path="/logout" component={LogoutComponent}></AuthenticatedRoute>
                        <Route path="/" exact component={Login}></Route>
                        <Route component={ErrorComponent}></Route>
                    </Switch>
                    <FooterComponent></FooterComponent>
                    {/*    <Route path="/welcome" element={<WelcomeComponent></WelcomeComponent>}></Route>*/}
                </></BrowserRouter>
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
                            <tr key={todo.id}>
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
