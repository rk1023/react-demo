import JwtTokenService from './../../api/todo/JwtTokenService'

class AuthService
{

    registerSuccessfulLogin(userName, pwd)
    {
      //  console.log('AuthService=>registerSuccessfulLogin');
      sessionStorage.setItem('user',userName);
    }

    fetchJWTToken(username,password)
    {
      JwtTokenService.fetchJwtToken(username,password).then(
        response=>{
          console.log('AuthService|getJWTToken');
          console.log(response.data);
          sessionStorage.setItem('token',response.data.token);   
        }
        )
        .catch(error=> {
          console.log('AuthService|getJWTToken: Could not get JWT Token');
        })
    }

    getJwtToken()
    {
      console.log('AuthService=>getJwtToken')
      return sessionStorage.getItem('token'); 
    }

    logOutUser()
    {
      //  console.log('AuthService=>logOutUser');
      sessionStorage.removeItem('user');
      return sessionStorage.removeItem('token'); 
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