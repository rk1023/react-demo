import Axios from "axios";
import AuthService from './../../components/todo/AuthService'
class TodoService
{

  fetchAllTodoByUserName(userName)
  {
   // console.log('TodoService=>fetchAllTodoByUserName');
   const token ='Bearer '+AuthService.getJwtToken();
     return  Axios.get(`http://localhost:8080/todo/${userName}`,{headers: {Authorization: token } })
     
  }

  deleteTodoByUserNameAndId(userName,todoId)
  {
   // console.log('TodoService=>deleteTodoByUserNameAndId');
   const token ='Bearer '+AuthService.getJwtToken();
     return  Axios.delete(`http://localhost:8080/todo/${userName}/${todoId}`,{headers: {Authorization: token }})
     
  }

  fetchAllTodoByUserNameAndId(userName,todoId)
  {
   // console.log('TodoService=>fetchAllTodoByUserNameAndId');
   const token ='Bearer '+AuthService.getJwtToken();
     return  Axios.get(`http://localhost:8080/todo/${userName}/${todoId}`,{headers: {Authorization: token }})
     
  }

  
  updateTodoByUserNameAndId(userName,todoId,todoDto)
  {
    console.log('TodoService=>updateTodoByUserNameAndId');
    const token ='Bearer '+AuthService.getJwtToken();
     return  Axios.put(`http://localhost:8080/todo/${userName}/${todoId}`,todoDto,{headers: {Authorization: token }})
     
  }

}
export default new TodoService()