import styles from './style.module.css';
import garbageIcon from '../../assets/garbage.svg';
import checkIcon from '../../assets/check.svg';
import checkedIcon from '../../assets/checked.svg';

interface TasksProps {
  content: string[];
  hasCompleted: boolean;
}

export const Tasks = ({ content, hasCompleted }: TasksProps) => {
  return (
    <div className={styles.tasksMainWrapper}>
      {content.map((taskText) => {
        return (
          <div className={styles.taskWrapper}>
            {!hasCompleted ? (
              <img
                src={checkIcon}
                alt='check icon'
                className={styles.checkIcon}
              />
            ) : (
              <img
                src={checkedIcon}
                alt='checked icon'
                className={styles.checkedIcon}
              />
            )}
            <p className={styles.taskText} key={taskText}>
              {taskText}
            </p>
            <img
              src={garbageIcon}
              alt='delete icon'
              className={styles.garbageIcon}
            />
          </div>
        );
      })}
    </div>
  );
};
