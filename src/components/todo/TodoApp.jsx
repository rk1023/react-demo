import React, { Component } from 'react';
import  {BrowserRouter as Router ,Route ,Switch } from 'react-router-dom';


class TodoApp extends Component {
    render() {
        return (
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


              {/*<ShowInvalidCredential hasLoginFailed={this.state.isLoginFailed} hasLoginSuccess={this.state.isLoginSuccessful}/>
                
        */} 

        {this.state.isLoginFailed && <div>Invalid UserName/Password!</div>}
        {this.state.isLoginSuccessful && <div>Login Successful!</div>}


            </div>
        );
    }

}



class ListTodosComponent extends Component
{
    render() 
    {
        return <div> List Todos component!</div>
    }
}

class WelcomeComponent extends Component
{
    render() 
    {
        return <div> Welcome {this.props.match.params.userName}!</div>
    }
}


function ErrorComponent ()
{
    return <div>Some Error Occured!</div>
}

// function ShowInvalidCredential(props)
// {
//     if(props.hasLoginFailed)
//     {
//         return  <div>Invalid UserName/Password!</div>
//     }
//     else if(props.hasLoginSuccess)
//     return <div>Login Successful!</div>;
//     else
//       return null;
// }

export default TodoApp;