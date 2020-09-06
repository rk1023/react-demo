class AuthService
{

    registerSuccessfulLogin(userName, pwd)
    {
      //  console.log('AuthService=>registerSuccessfulLogin');
      sessionStorage.setItem('user',userName);
    }

    logOutUser()
    {
      //  console.log('AuthService=>logOutUser');
      sessionStorage.removeItem('user');
    }

    isUserLoggedIn()
    {
      //  console.log('AuthService=>isUserLoggedIn');
        let user=sessionStorage.getItem('user');
        if(user===null)
        {
        //    console.log('AuthService=>isUserLoggedIn: returning false');
            return false
        }
        
      //  console.log('AuthService=>isUserLoggedIn: returning true');
        return true
    }

    
    getLoggedInUser()
    {
       // console.log('AuthService=>getLoggedInUser')
        return sessionStorage.getItem('user')
    }

}

export default new AuthService()