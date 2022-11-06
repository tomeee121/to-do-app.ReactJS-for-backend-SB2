import React, {Component} from 'react';
import axios from "axios";

class ToDoDataService extends Component {
    retrieveAllTodos(name) {
        return axios.get(`http://localhost:8080/users/${name}/todos`)
    }
}

export default new ToDoDataService()