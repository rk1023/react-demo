import React, { Component } from 'react';
import AuthService from './AuthService.js';
import { Redirect, Route } from 'react-router-dom';

class AuthenticatedRoute extends Component
{

  render()
  {
  if(AuthService.isUserLoggedIn())
  {
     return <Route {...this.props}></Route>
  }else
  {
    return  <Redirect to='/login'></Redirect>
  }

  }

}

export default AuthenticatedRoute;