import Axios from "axios";
import AuthService from './../../components/todo/AuthService'
import AppConstants from './../../AppConstants'
class TodoService
{
   baseUrl=AppConstants.BASE_API_URL;
  fetchAllTodoByUserName(userName)
  {
   // console.log('TodoService=>fetchAllTodoByUserName');
    const token ='Bearer '+AuthService.getJwtToken();
  
     return  Axios.get(`${this.baseUrl}/todo/${userName}`,{headers: {Authorization: token } })
     
  }

  deleteTodoByUserNameAndId(userName,todoId)
  {
   // console.log('TodoService=>deleteTodoByUserNameAndId');
   const token ='Bearer '+AuthService.getJwtToken();
     return  Axios.delete(`${this.baseUrl}/todo/${userName}/${todoId}`,{headers: {Authorization: token }})
     
  }

  fetchAllTodoByUserNameAndId(userName,todoId)
  {
   // console.log('TodoService=>fetchAllTodoByUserNameAndId');
   const token ='Bearer '+AuthService.getJwtToken();
     return  Axios.get(`${this.baseUrl}/todo/${userName}/${todoId}`,{headers: {Authorization: token }})
     
  }

  
  updateTodoByUserNameAndId(userName,todoId,todoDto)
  {
    console.log('TodoService=>updateTodoByUserNameAndId');
    const token ='Bearer '+AuthService.getJwtToken();
     return  Axios.put(`${this.baseUrl}/todo/${userName}/${todoId}`,todoDto,{headers: {Authorization: token }})
     
  }

}
export default new TodoService()