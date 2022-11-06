import React, {Component} from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import bootstrap from './css/bootstrap.css'
import ToDo from './css/ToDo.css'
import AuthenticationService from "./AuthenticationService";
import Login from './Login'
import HeaderComponent from "./Header";
import AuthenticatedRoute from "./AuthenticatedRoute";
import ToDoComponent from './ToDoComponent'
import ErrorComponent from "./ErrorComponent";
import FooterComponent from "./Footer";
import WelcomeComponent from "./WelcomeComponent";
import LogoutComponent from "./Logout";


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

export default ToDoApp;
