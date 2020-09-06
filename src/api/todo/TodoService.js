import Axios from "axios";
class TodoService
{

  fetchAllTodoByUserName(userName)
  {
   // console.log('TodoService=>fetchAllTodoByUserName');
     return  Axios.get(`http://localhost:8080/todo/${userName}`)
     
  }

  deleteTodoByUserNameAndId(userName,todoId)
  {
   // console.log('TodoService=>deleteTodoByUserNameAndId');
     return  Axios.delete(`http://localhost:8080/todo/${userName}/${todoId}`)
     
  }

  fetchAllTodoByUserNameAndId(userName,todoId)
  {
   // console.log('TodoService=>fetchAllTodoByUserNameAndId');
     return  Axios.get(`http://localhost:8080/todo/${userName}/${todoId}`)
     
  }

  
  updateTodoByUserNameAndId(userName,todoId,todoDto)
  {
    console.log('TodoService=>updateTodoByUserNameAndId');
     return  Axios.put(`http://localhost:8080/todo/${userName}/${todoId}`,todoDto)
     
  }

}
export default new TodoService()