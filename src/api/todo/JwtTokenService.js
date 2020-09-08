import Axios from "axios";
class JwtTokenService
{

    fetchJwtToken(username,password)
    {
      console.log('WelcomeService=>fetchWelcome');
       return  Axios.post('http://localhost:8080/authenticate',{username,password})
       
    }
}
export default new JwtTokenService()
