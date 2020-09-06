import React, { Component } from 'react';
import TodoService from './../../api/todo/TodoService'
import AuthService from './AuthService.js'
//import TodoComponent from './TodoComponent'

class ListTodosComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: []
        }

        this.fetchTodo = this.fetchTodo.bind(this)
        this.handleSuccessResponse = this.handleSuccessResponse.bind(this)
        this.handleErrorResponse = this.handleErrorResponse.bind(this)
        this.deleteTodo = this.deleteTodo.bind(this)
        this.updateTodo =this.updateTodo.bind(this)
        this.addTodo =this.addTodo.bind(this)
        
        console.log('Inside constructor ')
    }

    componentDidMount() {
      //  console.log('Inside componentDidMount ')
        this.fetchTodo()
    }

    componentWillUnmount() {
     //   console.log('Inside componentWillUnmount ')
    }

    componentWillReceiveProps() {
      //  console.log('Inside componentWillReceiveProps ')
    }

    shouldComponentUpdate(nextProps, nextState) {
      //  console.log('Inside shouldComponentUpdate ')
       // console.log(nextProps)
       // console.log(nextState)
        return true
    }

    render() {
        console.log('Inside render ')
        return (
            <div>
                <h1>List of Todo</h1>
                <div className='container' >
                    <table>
                        <thead>
                            <tr>

                                <th>Description</th>
                                <th>Completed?</th>
                                <th>TargetDate</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo => (
                                        <tr key={todo.id} >
                                            <td>{todo.description}</td>
                                            <td>{todo.done.toString()}</td>
                                            <td>{todo.targetDate}</td>
                                            <td>
                                                <span><button className='btn btn-warning' onClick={() => this.deleteTodo(todo.id)}>Delete</button></span>

                                                <span> <button onClick={() => this.updateTodo(todo.id)}>Edit</button></span>
                                                <span> <button onClick={() => this.addTodo()}>Add</button></span>
                                            </td>

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

    fetchTodo() {

        TodoService.fetchAllTodoByUserName(AuthService.getLoggedInUser())
            .then(response => this.handleSuccessResponse(response))
            .catch(error => this.handleErrorResponse(error))
    }

    deleteTodo(todoId) {
       // console.log(`ListTodosComponent=>deleteTodo=>todId ${todoId}`)
        TodoService.deleteTodoByUserNameAndId(AuthService.getLoggedInUser(), todoId)
            .then(response => this.handleSuccessResponse(response))
        //  .catch(error => this.handleErrorResponse(error))
    }
    updateTodo(todoId) {
        //console.log(`ListTodosComponent=>updateTodo=>todId ${todoId}`)
        this.props.history.push(`/todos/${todoId}`);
    }

    addTodo() {
        console.log('addTodo')
        let todoId=0
        this.props.history.push(`/todos/${todoId}`);
    }

    

    


    handleSuccessResponse(response) {
        // console.log('handleSuccessResponse')
        // console.log(response.data)
        // console.log(response.status)
        this.setState({ todos: response.data })
    }
    handleErrorResponse(error) {
        console.log(error.response)
    }
}

export default ListTodosComponent;
