import { useState } from 'react';
import { useAppContext } from "../AppProvider";
import { FaRegTrashAlt, FaPen } from "react-icons/fa";
import { TbUrgent, TbThumbUp } from "react-icons/tb";
import { MdPendingActions } from "react-icons/md";

export const TaskList = () => {

  const { tasksList, dispatch } = useAppContext();

  const [ showEdit, setShowEdit ] = useState(false);
  const [ editTask, setEditTask ] = useState({});

  const handleRemoveTask = (id) => {
    dispatch({
      type: 'REMOVE_TASK',
      payload: id
    });
  }

  const prepareEditTask = task => {
    setShowEdit(true);
    setEditTask(task);
  }

  const handleEditTask = (e) => {
    e.preventDefault();
    let repeat = tasksList.some((listedTask) => listedTask.name === editTask.name);
    if (repeat) {
      alert("Repeated task, please enter another one...");
      setShowEdit(false);
      setEditTask({});
    }
    else {
      dispatch({
        type: "EDIT_TASK",
        payload: editTask,
      });
      setShowEdit(false);
      setEditTask({});
    }
  }

  const changeToPending = (id) => {
    dispatch({
      type: 'PENDING_TASK',
      payload: id
    });
  }

  const changeToUrgent = (id) => {
    dispatch({
      type: 'URGENT_TASK',
      payload: id
    });
  }

  const changeToCompleted = (id) => {
    dispatch({
      type: 'COMPLETED_TASK',
      payload: id
    });
  }

  return (
    <>
      <h3>Tasks List</h3>
      {tasksList.length > 0 ? (
        <ul>
          {tasksList.map((task, index) => {
            return (
              <li key={task.id} style={{ textAlign: 'left' }}>
                {index + 1}: {task.name} ({task.completed})
                <FaRegTrashAlt
                  color="tomato"
                  style={{
                    verticalAlign: "middle",
                    marginLeft: "7px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleRemoveTask(task.id)}
                />
                <FaPen
                  color="lightblue"
                  style={{
                    verticalAlign: "middle",
                    marginLeft: "7px",
                    cursor: "pointer",
                  }}
                  onClick={() => prepareEditTask(task)}
                />
                <MdPendingActions
                  color="yellow"
                  style={{
                    verticalAlign: "middle",
                    marginLeft: "7px",
                    cursor: "pointer",
                  }}
                  onClick={() => changeToPending(task.id)}
                />
                <TbUrgent
                  color="orange"
                  style={{
                    verticalAlign: "middle",
                    marginLeft: "7px",
                    cursor: "pointer",
                  }}
                  onClick={() => changeToUrgent(task.id)}
                />
                <TbThumbUp
                  color="green"
                  style={{
                    verticalAlign: "middle",
                    marginLeft: "7px",
                    cursor: "pointer",
                  }}
                  onClick={() => changeToCompleted(task.id)}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No tasks...</p>
      )}
      {showEdit ? (
        <form onSubmit={handleEditTask}>
          <input
            type="text"
            name="name"
            id="name"
            defaultValue={editTask.name}
            onChange={(e) =>
              setEditTask({
                id: editTask.id,
                name: e.target.value,
                completed: editTask.completed
              })
            }
          />
          <input type="submit" value="Edit task" />
        </form>
      ) : null}
    </>
  );
}
