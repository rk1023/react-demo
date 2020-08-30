import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './../../bootstrap.css';
//import './menuComponent.css';



class TodoApp extends Component {
    render() {
        return (
            <div>
             
                <div className="todoApp">
                    <Router>
                    <HeaderComponent></HeaderComponent>
                        <Switch>
                            <Route path='/' exact component={LoginComponent}></Route>
                            <Route path='/login' component={LoginComponent}></Route>
                            <Route path='/welcome/:userName' component={WelcomeComponent}></Route>
                            <Route path='/todos' component={ListTodosComponent}></Route>
                            <Route path='/logout' component={LogoutComponent}></Route>
                            <Route path='/*' component={ErrorComponent}></Route>
                          
                            
                        </Switch>

                        <FooterComponent></FooterComponent>
                    </Router>

                    {/* <LoginComponent></LoginComponent> */}
                    {/* <WelcomeComponent></WelcomeComponent> */}
                </div>
                
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
<div className='container'>
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
            </div>
        )
    }
}
class HeaderComponent extends Component {
    render() {
        return (
            <header>
                <nav className="nav navbar-expand-md navbar-dark bg-dark">
                <ul className="navbar-nav">
                    <li><Link to='/welcome/admin'>Home</Link></li>
                    <li><Link to='/todos'>Todo</Link></li>
                </ul>
                <ul className="navbar-nav navbar-collapse justify-content-end">
                    <li className="nav-link"><Link to='/login'>Login</Link></li>
                    <li className="nav-link"><Link to='/logout'>Logout</Link></li>
                </ul>
           </nav>
        </header>

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

class LogoutComponent extends Component {
    render() {
        return (
            <div className='container'>
                You have loggedout Successfuly!<br></br>
               Thank You for visiting my App.
            </div>
        )
    }
}

function ErrorComponent() {
    return <div>Some Error Occured!</div>
}


export default TodoApp;