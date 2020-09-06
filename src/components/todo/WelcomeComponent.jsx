import React, { Component } from 'react';
import WelcomeService from './../../api/todo/WelcomeService'
import AuthService from './AuthService.js'
import todoImage from '../../images/Todo.jpg'; 

class WelcomeComponent extends Component {

    constructor(props) {
           super(props)
           this.getMessage=this.getMessage.bind(this)
           this.getMessageByUserName=this.getMessageByUserName.bind(this)
           this.handleSuccessResponse=this.handleSuccessResponse.bind(this)
    this.state={
        welcomeMsg: ''
    }
     }
    render() {
        return (
            <div style={style}>
               <img src={todoImage} alt="Todo"  height={350} width={800}/>
              

            </div>


        )
    }

    getMessage() {
        console.log('WelcomeComponent=>getMessage')
        WelcomeService.fetchWelcome()
        .then(
            response=>this.handleSuccessResponse(response)
            
            )
    }

    getMessageByUserName() {
        console.log('WelcomeComponent=>getMessageByUserName')

        WelcomeService.fetchWelcomeByUserName(AuthService.getLoggedInUser())
        .then(
            response=>this.handleSuccessResponse(response)
            
            )
            .catch(error=> this.handleErrorResponse(error))
    }

    handleSuccessResponse(response)
    {
        console.log(response.data)
        console.log(response.status)
        this.setState({ welcomeMsg: response.data.description })
    }
    handleErrorResponse(error)
    {
        console.log(error.response.data.message)
        this.setState({ welcomeMsg: error.response.data.message })
    }
}

const style = {
    margin: 15,
   };
export default WelcomeComponent;
