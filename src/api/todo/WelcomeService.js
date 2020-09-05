import Axios from "axios";

class WelcomeService
{
  fetchWelcome()
  {
    console.log('WelcomeService=>fetchWelcome');
     return  Axios.get('http://localhost:8080/todo/welcome/msg')
     
  }

  fetchWelcomeByUserName(userName)
  {
    console.log('WelcomeService=>fetchWelcome');
     return  Axios.get(`http://localhost:8080/todo/welcome/msg/${userName}`)
     
  }
}
export default new WelcomeService()
