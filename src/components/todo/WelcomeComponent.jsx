import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import { super } from '@babel/types';
import WelcomeService from './../../api/todo/WelcomeService'
import AuthService from './AuthService.js'

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
            <div>
                Welcome {this.props.match.params.userName}!<br></br>
                You can mange your todos <Link to='/todos'>here</Link>

                <div>
                    Click below button to call API<br></br>
                    <button onClick={this.getMessageByUserName}>CallAPI</button>
                </div>

                 <div>
                    {this.state.welcomeMsg}
                </div>
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
export default WelcomeComponent;
