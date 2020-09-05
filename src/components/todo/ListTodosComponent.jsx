import React, { Component } from 'react';


class ListTodosComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [
                { id: 10001, description: 'Learn React', done: false, targetDate: new Date() },
                { id: 10002, description: 'Learn Angular', done: false, targetDate: new Date() },
                { id: 10003, description: 'Learn Docker', done: false, targetDate: new Date() },
                { id: 10004, description: 'Learn K8s', done: false, targetDate: new Date() }
            ]
        }


    }


    render() {
        return (
            <div>
                <h1>List of Todo</h1>
                <div className='container'>
                    <table>
                        <thead>
                            <tr>

                                <th>Description</th>
                                <th>Completed?</th>
                                <th>TargetDate</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo => (
                                        <tr key={todo.id} >
                                            <td>{todo.description}</td>
                                            <td>{todo.done.toString()}</td>
                                            <td>{todo.targetDate.toDateString()}</td>

                                        </tr>
                                    )
                                )

                            }
                        </tbody>

                    </table>
                </div>
            </div>
        )
    }
}

export default ListTodosComponent;
