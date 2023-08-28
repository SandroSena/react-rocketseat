import styles from './style.module.css';
import garbageIcon from '../../assets/garbage.svg';
import checkIcon from '../../assets/check.svg';
import checkedIcon from '../../assets/checked.svg';

interface TasksProps {
  content: string;
  hasCompleted: boolean;
}

export const Tasks = ({ content, hasCompleted }: TasksProps) => {
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
        <img
          src={garbageIcon}
          alt='delete icon'
          className={styles.garbageIcon}
        />
      </div>
    </div>
  );
};
