import { useState } from 'react';
import { useAppContext } from '../AppProvider';

export const Form = () => {

  const { tasksList, dispatch } = useAppContext();
  
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let repeat = tasksList.some(listedTask => listedTask.id === task.id);
    if(repeat) {
      alert ('Repeated task, please enter another one...')
    }
    else {
      dispatch({
      type: 'ADD_TASK',
      payload: task
    });
    e.target.reset();
    }
  }

  return (
    <form onSubmit={ handleSubmit } style={{ display: 'flex', gap: '1rem', justifyContent: 'center'}}>
      <input 
        type="text" 
        name="name" 
        id="name" 
        onChange={(e) => setTask(
          { 
            id: e.target.value,
            name: e.target.value,
            completed: 'pending'
          }
        )}
      />
      <input type="submit" value="Submit" />
    </form>
  )
}
