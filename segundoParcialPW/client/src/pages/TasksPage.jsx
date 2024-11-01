import { useEffect } from "react";
import { useAuth } from "../context/AuthContext"
import { useTasks } from "../context/taskContext";

function TasksPage() {

  //const {user} = useAuth() //agrega objeto en mi consola de mi usuario ya ingresado
  //console.log(user)

  const {getTasks, tasks} = useTasks();

  useEffect(() =>{
    getTasks()
  }, [])

  return (
    <div>
      taskspage
        {tasks.map(task => (
          <div key={task._id}> 
              <h1>{task.title}</h1>
              <p>{task.description}</p>
          </div>
        ))}
    </div>
  )
}

export default TasksPage
