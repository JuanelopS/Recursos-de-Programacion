import { useAppContext } from "../AppProvider";

export const TasksResume = () => {

  const { tasksList } = useAppContext();

  const pendingTasks = tasksList.filter(task => task.completed === 'pending');

  const urgentTasks = tasksList.filter(task => task.completed === 'urgent');

  const completedTasks = tasksList.filter(task => task.completed === 'completed');

  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <p>All tasks: {tasksList.length}</p>
      <p style={{ color: "yellow" }}>Pending: {pendingTasks.length}</p>
      <p style={{ color: "orange" }}>Urgent: {urgentTasks.length}</p>
      <p style={{ color: "lightgreen" }}>Completed: {completedTasks.length}</p>
    </div>
  );
}
