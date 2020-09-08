import Axios from "axios";
import AuthService from './../../components/todo/AuthService'
import AppConstants from './../../AppConstants'
class WelcomeService
{
  baseUrl=AppConstants.BASE_API_URL;
  fetchWelcome()
  {
    console.log('WelcomeService=>fetchWelcome');
    const token ='Bearer '+AuthService.getJwtToken();
     return  Axios.get(`${this.baseUrl}/todo/welcome/msg`,{headers: {Authorization: token }})
     
  }

  fetchWelcomeByUserName(userName)
  {
    console.log('WelcomeService=>fetchWelcomeByUserName');
    const token ='Bearer '+AuthService.getJwtToken();
     return  Axios.get(`${this.baseUrl}/todo/welcome/msg/${userName}`,{headers: {Authorization: token }})
     
  }
}
export default new WelcomeService()
