import React, { Component } from 'react';
import AuthService from './AuthService.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


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
          <div>
            <MuiThemeProvider>
              <div>
               <TextField
                 hintText="Enter your Username"
                 floatingLabelText="Username"
                 onChange = {(event,newValue) => this.setState({username:newValue})}
                 />
               <br/>
                 <TextField
                   type="password"
                   hintText="Enter your Password"
                   floatingLabelText="Password"
                   onChange = {(event,newValue) => this.setState({password:newValue})}
                   />
                 <br/>
                 <RaisedButton label="Submit" primary={true} style={style} onClick={this.login}/>
             </div>
             </MuiThemeProvider>
          </div>
        );
      }

}

const style = {
    margin: 15,
   };

export default LoginComponent;