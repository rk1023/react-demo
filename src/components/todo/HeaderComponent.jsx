import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from './AuthService.js'
import { withRouter } from 'react-router';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { whitesmoke } from 'color-name';



class HeaderComponent extends Component {



    render() {
        const isUserLoggedIn = AuthService.isUserLoggedIn();
        const userName = AuthService.getLoggedInUser();
        const welcomeLink='/welcome/'+userName
        return (
 
          
                <MuiThemeProvider>
                    <div>
                        <AppBar>
                        {isUserLoggedIn && <li style={style}><Link to='/todos'>Todo</Link></li>}
                           
                          {isUserLoggedIn && <li style={style}><Link to='/logout' onClick={AuthService.logOutUser}>Logout</Link></li>}
                          {isUserLoggedIn && <li style={style}><Link to={welcomeLink}>Home</Link></li>}
                        </AppBar>



                    </div>
                </MuiThemeProvider>
           
        )
    }


}
const style = {
    margin: 15,
    color: whitesmoke
   };
export default withRouter(HeaderComponent);
