import { useAppContext } from "../AppProvider";

export const Tasks = () => {

  const { tasksList } = useAppContext();

  const pendingTasks = tasksList.filter(task => task.completed === 'pending');

  const urgentTasks = tasksList.filter(task => task.completed === 'urgent');

  const completedTasks = tasksList.filter(task => task.completed === 'completed');

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <p>Tasks pending: {pendingTasks.length}</p>
      <p>Tasks urgent: {urgentTasks.length}</p>
      <p>Tasks completed: {completedTasks.length}</p>
    </div>
  );
}
