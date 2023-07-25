import TaskItem from './TaskItem';
import { useTask } from '../context/useTask';

function TaskList() {
  const { tasks } = useTask();

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
