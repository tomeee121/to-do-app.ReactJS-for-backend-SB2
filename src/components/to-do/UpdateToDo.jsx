import React, {Component} from 'react';
import moment from "moment";
import {Field, Form, Formik} from "formik";
import ToDoDataService from "./ToDoDataService";
import AuthenticationService from "./AuthenticationService";

export default class UpdateToDo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            description: 'To do description',
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(values) {
        console.log(values)
        let user = AuthenticationService.isUserLoggedIn()
        ToDoDataService.updateToDo(user, this.state.id, {
            id: this.state.id,
            description: values.description,
            targetDate: values.targetDate
        }).then(res => this.props.history.push('/todos'))
    }

    render() {
        let {description, targetDate} = this.state
        return (
            <div className={"container"}>
                <h2>Update the task:</h2>
                <div>
                    <Formik initialValues={{description, targetDate}} onSubmit={this.onSubmit}>
                        {
                            (props) =>
                                (<Form>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field type="text" name="description" className="form-control"></Field>
                                        <label>Date to finish</label>
                                        <Field type="date" name="targetDate" className="form-control"></Field>
                                    </fieldset>
                                    <button type="submit" className="btn btn-success">Update
                                    </button>
                                </Form>)
                        }
                    </Formik>
                </div>
            </div>
        );
    }
}

