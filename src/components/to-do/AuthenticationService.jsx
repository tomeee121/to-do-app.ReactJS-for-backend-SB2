import React, {Component} from 'react';

class AuthenticationService extends Component {

    registerSucessfulLogin(username,password) {
        sessionStorage.setItem('authenticatedUser', username)
    }
    registerLogout() {
        sessionStorage.removeItem('authenticatedUser')
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser')
        return user !== null;
    }
}

export default new AuthenticationService();