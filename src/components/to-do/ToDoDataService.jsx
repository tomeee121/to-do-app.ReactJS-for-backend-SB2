import React, {Component} from 'react';
import axios from "axios";

class ToDoDataService extends Component {
    retrieveAllTodos(name) {
        return axios.get(`http://localhost:8080/users/${name}/todos`)
    }

    retrieveTodo(name, id) {
        return axios.get(`http://localhost:8080/users/${name}/todos/${id}`)
    }

    deleteToDo(name, id) {
        return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`)
    }

    updateToDo(name, id, todo) {
        return axios.put(`http://localhost:8080/users/${name}/todos/${id}`, todo)
    }

    createToDo(name, todo) {
        return axios.post(`http://localhost:8080/users/${name}/todos`, todo)
    }
}

export default new ToDoDataService()