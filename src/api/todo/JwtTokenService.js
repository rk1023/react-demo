import Axios from "axios";
import AppConstants from './../../AppConstants'
class JwtTokenService
{
    baseUrl=AppConstants.BASE_API_URL;

    fetchJwtToken(username,password)
    {
      console.log('WelcomeService=>fetchWelcome');
       return  Axios.post(`${this.baseUrl}/authenticate`,{username,password})
       
    }
}
export default new JwtTokenService()
