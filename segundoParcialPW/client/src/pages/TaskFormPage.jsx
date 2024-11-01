import {useForm} from 'react-hook-form'
import { useTasks } from '../context/taskContext';

function TaskFormPage() {
  const{register, handleSubmit} = useForm();
  const {createTask} = useTasks()
  // const {getTask} = useTasks()
  // console.log(getTasks())

  const onSubmit = handleSubmit((data) =>{
    createTask(data) ////////////////////////////////
  })
  return (
    <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
      <form onSubmit={onSubmit}>
        <input type="text" className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' placeholder="Titulo" {...register('title')}/>
        <textarea placeholder="Descripcion"  className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' id="" rows="3" {...register('description')}></textarea>
        <select
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          {...register('status')}
        >
          <option value="pendiente">Pendiente</option>
          <option value="en progreso">En progreso</option>
          <option value="completada">Completada</option>
        </select>
        <input type="number" min="1" max="5" className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' placeholder="Prioridad (1-5)" {...register('priority')} />
        <input type="datetime-local" className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' {...register('date')} />
        <button>Guardar</button>
      </form>
    </div>
  )
}

export default TaskFormPage
