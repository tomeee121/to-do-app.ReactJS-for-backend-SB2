import React, {Component} from "react";
import bootstrap from './css/bootstrap.css'
import ToDo from './css/ToDo.css'
import ToDoDataService from "./ToDoDataService";
import AuthenticationService from "./AuthenticationService";
import moment from "moment";

class ToDoComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            message: null
                    // {id: 1, description: 'Learn React', done: false, targetDate: new Date()},
                    // {id: 2, description: 'Visit India', done: false, targetDate: new Date()},
                    // {id: 3, description: 'Dance course', done: false, targetDate: new Date()},
        }
        this.callDeleteMethod = this.callDeleteMethod.bind(this)
        this.refreshToDos = this.refreshToDos.bind(this)
    }

    componentDidMount() {
        let user = AuthenticationService.isUserLoggedIn()
        ToDoDataService.retrieveAllTodos(user)
            .then(res => {this.setState({
            todos: res.data
        })})
    }

    callDeleteMethod(id) {
        let user = AuthenticationService.isUserLoggedIn()
        ToDoDataService.deleteToDo(user, id)
            .then(this.setState({
                message: `Deletion of todo ${id} was sucessful`
            }))
        this.refreshToDos()
    }

    callUpdateMethod(id) {
        this.props.history.push(`/todos/${id}`)
    }

    refreshToDos() {
        console.log('refreshed')
        let user = AuthenticationService.isUserLoggedIn()
        ToDoDataService.retrieveAllTodos(user)
            .then(res => {this.setState({
                todos: res.data
            })})
    }

    render() {
        return (
            <div>
                <div className={"container"}>
                    <h1>To-do'sy</h1>
                    {this.state.message !== null && <div className="alert alert-warning">{this.state.message}</div>}
                    <table className={"table"}>
                        <thead>
                        <tr>
                            <th>description</th>
                            <th>Is completed?</th>
                            <th>Finish date</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.todos.map(todo =>
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{moment(todo.targetDate).format('YYYY-MM-DD').toString()}</td>
                                    <td><button className="btn btn-success" onClick={() => this.callUpdateMethod(todo.id)}>Update item</button></td>
                                    <td><button className="btn btn-warning" onClick={() => this.callDeleteMethod(todo.id)}>Delete</button></td>
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
export default ToDoComponent;