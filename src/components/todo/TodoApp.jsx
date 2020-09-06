import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './../../bootstrap.css';
import AuthenticatedRoute from './AuthenticatedRoute'
import LoginComponent from './LoginComponent'
import ListTodosComponent from './ListTodosComponent'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import WelcomeComponent from './WelcomeComponent'
import LogoutComponent from './LogoutComponent'
import ErrorComponent from './ErrorComponent'
import TodoComponent from './TodoComponent'

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
                            <AuthenticatedRoute path='/welcome/:userName' component={WelcomeComponent}></AuthenticatedRoute>
                            <AuthenticatedRoute path='/todos/:todoId' component={TodoComponent}></AuthenticatedRoute>
                            <AuthenticatedRoute path='/todos' component={ListTodosComponent}></AuthenticatedRoute>
                           
                            <AuthenticatedRoute path='/logout' component={LogoutComponent}></AuthenticatedRoute>
                            <Route path='/*' component={ErrorComponent}></Route>


                        </Switch>

                        <FooterComponent></FooterComponent>
                    </Router>
                </div>

            </div>
        );
    }

}


export default TodoApp;