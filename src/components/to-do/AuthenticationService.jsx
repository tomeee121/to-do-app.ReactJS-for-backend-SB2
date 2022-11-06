import React, {Component} from 'react';

class AuthenticationService extends Component {

    registerSucessfulLogin(username,password) {
        sessionStorage.setItem('authenticatedUser', username)
    }
    registerLogout() {
        sessionStorage.removeItem('authenticatedUser')
    }
}

export default new AuthenticationService();