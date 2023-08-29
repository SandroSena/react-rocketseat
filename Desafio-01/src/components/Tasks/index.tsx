import styles from './style.module.css';
import garbageIcon from '../../assets/garbage.svg';
import checkIcon from '../../assets/check.svg';
import checkedIcon from '../../assets/checked.svg';

interface TasksProps {
  id: number;
  content: string;
  hasCompleted: boolean;
  onDeleteTask: (id: number) => void;
  onCompletedTask: (hasComplete: boolean) => void;
}

export const Tasks = ({ id, content, hasCompleted, onDeleteTask }: TasksProps) => {
  return (
    <div className={styles.tasksMainWrapper}>
      <div className={styles.taskWrapper}>
        {!hasCompleted ? (
          <button className={styles.completedTaskButton}>
            <img
              src={checkIcon}
              alt='check icon'
              className={styles.checkIcon}
            />
          </button>
        ) : (
          <button className={styles.completedTaskButton}>
            <img
              src={checkedIcon}
              alt='checked icon'
              className={styles.checkedIcon}
            />
          </button>
        )}
        <p className={styles.taskText} key={content}>
          {content}
        </p>
        <button
          className={styles.completedTaskButton}
          onClick={() => onDeleteTask(id)}
        >
          <img
            src={garbageIcon}
            alt='delete icon'
            className={styles.garbageIcon}
          />
        </button>
      </div>
    </div>
  );
};
