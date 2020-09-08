import Axios from "axios";
import AuthService from './../../components/todo/AuthService'

class WelcomeService
{
  fetchWelcome()
  {
    console.log('WelcomeService=>fetchWelcome');
    const token ='Bearer '+AuthService.getJwtToken();
     return  Axios.get('http://localhost:8080/todo/welcome/msg',{headers: {Authorization: token }})
     
  }

  fetchWelcomeByUserName(userName)
  {
    console.log('WelcomeService=>fetchWelcomeByUserName');
    const token ='Bearer '+AuthService.getJwtToken();
     return  Axios.get(`http://localhost:8080/todo/welcome/msg/${userName}`,{headers: {Authorization: token }})
     
  }
}
export default new WelcomeService()
