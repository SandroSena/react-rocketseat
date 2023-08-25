import styles from './style.module.css';

export const Tasks = () => {
  return (
    <div className={styles.mainTasksWrapper}>
      <div className={styles.tasksTitlesWrapper}>
        <div className={styles.tasksTextsWrapper}>
          <p className={styles.createdTasks}>Tarefe criadas</p>
          <span className={styles.textTasksSpan}>5</span>
        </div>
        <div className={styles.tasksTextsWrapper}>
          <p className={styles.finishTasks}>Concluidas</p>
          <span className={styles.textTasksSpan}>2 de 5</span>
        </div>
      </div>
    </div>
  );
};
