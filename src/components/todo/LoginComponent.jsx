import React, { Component } from 'react';
import AuthService from './AuthService.js';


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
            AuthService.registerSuccessfulLogin(this.state.userName, ' ');

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

export default LoginComponent;