import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from './AuthService.js'
import { withRouter } from 'react-router';

class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthService.isUserLoggedIn();

        return (
            <header>
                <nav className="nav navbar-expand-md navbar-dark bg-dark">
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li><Link to='/welcome/admin'>Home</Link></li>}
                        {isUserLoggedIn && <li><Link to='/todos'>Todo</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li className="nav-link"><Link to='/login'>Login</Link></li>}
                        {isUserLoggedIn && <li className="nav-link"><Link to='/logout' onClick={AuthService.logOutUser}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>

        )
    }
}

export default withRouter(HeaderComponent);
