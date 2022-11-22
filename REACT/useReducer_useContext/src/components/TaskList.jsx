import { useState } from "react";
import { useAppContext } from "../AppProvider";
import { FaRegTrashAlt, FaPen, FaHandPointRight } from "react-icons/fa";
import { TbUrgent, TbThumbUp } from "react-icons/tb";
import { MdPendingActions } from "react-icons/md";

export const TaskList = () => {

  const { tasksList, dispatch } = useAppContext();

  const [showEdit, setShowEdit] = useState(false);
  const [editTask, setEditTask] = useState({});
  const [filter, setFilter] = useState('all');

  const handleRemoveTask = id => {
    dispatch({
      type: "REMOVE_TASK",
      payload: id
    });
  };

  const prepareEditTask = task => {
    setShowEdit(true);
    setEditTask(task);
  };

  const handleEditTask = e => {
    e.preventDefault();
    let repeat = tasksList.some(
      (listedTask) => listedTask.name === editTask.name
    );
    if (repeat) {
      alert("Repeated task, please enter another one...");
      setShowEdit(false);
      setEditTask({});
    } else {
      dispatch({
        type: "EDIT_TASK",
        payload: editTask,
      });
      setShowEdit(false);
      setEditTask({});
    }
  };

  const changeToPending = id => {
    dispatch({
      type: "PENDING_TASK",
      payload: id,
    });
  };

  const changeToUrgent = id => {
    dispatch({
      type: "URGENT_TASK",
      payload: id,
    });
  };

  const changeToCompleted = id => {
    dispatch({
      type: "COMPLETED_TASK",
      payload: id,
    });
  };

  const itemStyle = {
    verticalAlign: "middle",
    margin: "7px",
    cursor: "pointer",
  };

  const radioFilter = e => {
    setFilter(e.target.value);
  }

  return (
    <>
      <h3>Tasks List</h3>
      <fieldset
        className="radio-buttons"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          marginBottom: "2rem",
        }}
        onChange={radioFilter}
      >
        <div>
          <label htmlFor="all">All</label>
          <input
            type="radio"
            name="state"
            id="all"
            value="all"
            defaultChecked
          />
        </div>
        <div>
          <label htmlFor="pending">Pending</label>
          <input type="radio" name="state" id="pending" value="pending" />
        </div>
        <div>
          <label htmlFor="urgent">Urgent</label>
          <input type="radio" name="state" id="urgent" value="urgent" />
        </div>
        <div>
          <label htmlFor="completed">Completed</label>
          <input type="radio" name="state" id="completed" value="completed" />
        </div>
      </fieldset>
      {tasksList.length > 0 ? (
        <table style={{ margin: "15px auto" }}>
          <tbody>
            {tasksList.map((task) => {
              if (task.completed === filter || filter === "all") {
                return (
                  <tr
                    key={task.id}
                    style={{
                      textAlign: "left",
                      marginBottom: "8px",
                      listStyle: "none",
                      fontSize: "1.1rem",
                    }}
                  >
                    <td>
                      <FaHandPointRight style={itemStyle} color="lightblue" />
                      {task.name}({task.completed})
                    </td>
                    <td>
                      <FaRegTrashAlt
                        color="red"
                        style={itemStyle}
                        onClick={() => handleRemoveTask(task.id)}
                      />
                      <FaPen
                        color="blue"
                        style={ itemStyle}
                        onClick={() => prepareEditTask(task)}
                      />
                      {task.completed !== "pending" ? (
                        <MdPendingActions
                          color="yellow"
                          style={itemStyle}
                          onClick={() => changeToPending(task.id)}
                        />
                      ) : null}
                      {task.completed !== "urgent" ? (
                        <TbUrgent
                          color="orange"
                          style={itemStyle}
                          onClick={() => changeToUrgent(task.id)}
                        />
                      ) : null}
                      {task.completed !== "completed" ? (
                        <TbThumbUp
                          color="lightgreen"
                          style={itemStyle}
                          onClick={() => changeToCompleted(task.id)}
                        />
                      ) : null}
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
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
                completed: editTask.completed,
              })
            }
          />
          <input type="submit" value="Edit task" />
        </form>
      ) : null}
    </>
  );
};
