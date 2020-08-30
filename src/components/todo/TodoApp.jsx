import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';



class TodoApp extends Component {
    render() {
        return (
            <div>
                <HeaderComponent></HeaderComponent>
                <div className="todoApp">
                    <Router>
                        <Switch>
                            <Route path='/' exact component={LoginComponent}></Route>
                            <Route path='/login' component={LoginComponent}></Route>
                            <Route path='/welcome/:userName' component={WelcomeComponent}></Route>
                            <Route path='/todos' component={ListTodosComponent}></Route>
                            <Route path='/*' component={ErrorComponent}></Route>
                        </Switch>
                    </Router>

                    {/* <LoginComponent></LoginComponent> */}
                    {/* <WelcomeComponent></WelcomeComponent> */}
                </div>
                <FooterComponent></FooterComponent>
            </div>
        );
    }

}

class LoginComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userName: "admin",
            password: '',
            isLoginSuccessful: false,
            isLoginFailed: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.login = this.login.bind(this)

    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })


    }

    login() {
        if (this.state.userName !== ' ' && this.state.password === 'admin') {
            console.log('inside login success case')
            this.props.history.push(`/welcome/${this.state.userName}`);
            // this.setState({ isLoginSuccessful : true})
            // this.setState({ isLoginFailed: false })

        } else {
            console.log('inside login failed case')
            this.setState({ isLoginFailed: true, isLoginSuccessful: false })

        }
        // console.log(this.state)
    }
    render() {
        return (
            <div className="loginComp">

                UserName :  <input type="text" name="userName" value={this.state.userName} onChange={this.handleChange}></input>
                <br></br>
                Password :  <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
                <br></br>
                <button onClick={this.login}>Login</button>

                {this.state.isLoginFailed && <div>Invalid UserName/Password!</div>}
                {this.state.isLoginSuccessful && <div>Login Successful!</div>}


            </div>
        );
    }

}



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

                <table>

                    <tr>
                        <th>Id</th>
                        <th>Description</th>
                        <th>Completed?</th>
                        <th>TargetDate</th>
                    </tr>

                    {
                        this.state.todos.map(
                            todo => (
                                <tr >

                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toDateString()}</td>

                                </tr>
                            )
                        )

                    }
                </table>
            </div>
        )
    }
}
class HeaderComponent extends Component {
    render() {
        return (
            <div>

            Todo Management System 

            </div>
        )
    }
}

class FooterComponent extends Component {
    render() {
        return (
            <div>
                <footer className="navbar footer fixed-bottom footer-light footer-shadow content container-fluid" >

                    <div className='footer'>  All Rights Reserved 2020@rk.nitp.</div>
                </footer>

            </div>
        )
    }
}

class WelcomeComponent extends Component {
    render() {
        return (
            <div>
                Welcome {this.props.match.params.userName}!<br></br>
                You can mange your todos <Link to='/todos'>here</Link>
            </div>
        )
    }
}


function ErrorComponent() {
    return <div>Some Error Occured!</div>
}


export default TodoApp;