import styles from './style.module.css';
import { useState } from 'react';

export const TasksList = () => {
  const [createdTasks, setCreatedTasks] = useState(0);
  const [finishedTasks, setFinishedTasks] = useState(0);
  const [tasks, setTasks] = useState([]);

  return (
    <div className={styles.mainTasksWrapper}>
      <div className={styles.tasksTitlesWrapper}>
        <div className={styles.tasksTextsWrapper}>
          <p className={styles.createdTasks}>Tarefa criadas</p>
          <span className={styles.textTasksSpan}>{createdTasks}</span>
        </div>
        <div className={styles.tasksTextsWrapper}>
          <p className={styles.finishTasks}>Concluidas</p>
          <span className={styles.textTasksSpan}>
            {`${finishedTasks} de ${tasks.length}`}
          </span>
        </div>
      </div>
    </div>
  );
};
