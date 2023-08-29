import { Task } from '../../App';
import { Tasks } from '../Tasks';
import styles from './style.module.css';

interface TaskListProps {
  tasks: Task[];
  onDeleteTask: (id: number) => void;
  onCompleteTask: (id: number) => void;
}

export const TasksList = ({
  tasks,
  onDeleteTask,
  onCompleteTask,
}: TaskListProps) => {
  const completedTasks = tasks.filter((task) => task.hasCompleted);
  const countCompletedTasks = completedTasks.length;

  return (
    <>
      <div className={styles.mainTasksWrapper}>
        <div className={styles.tasksTitlesWrapper}>
          <div className={styles.tasksTextsWrapper}>
            <p className={styles.createdTasks}>Tarefa criadas</p>
            <span className={styles.textTasksSpan}>{tasks.length}</span>
          </div>
          <div className={styles.tasksTextsWrapper}>
            <p className={styles.finishTasks}>Concluidas</p>
            <span className={styles.textTasksSpan}>
              {`${countCompletedTasks} de ${tasks.length}`}
            </span>
          </div>
        </div>
      </div>
      {tasks.map((task) => {
        return (
          <Tasks
            id={task.id}
            content={task.content}
            hasCompleted={task.hasCompleted}
            onDeleteTask={(id) => onDeleteTask(id)}
            onCompleteTask={(id) => onCompleteTask(id)}
          />
        );
      })}
    </>
  );
};
