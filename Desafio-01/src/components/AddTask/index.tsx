import styles from './style.module.css';
import plusIcon from './../../assets/plus.svg';

export const AddTask = () => {
  return (
    <div className={styles.addTaskWrapper}>
      <input type='text' placeholder='Adicione uma nova tarefa' />
      <span className={styles.buttonCreate}>
        Criar
        <img src={plusIcon} alt='Plus icon' />
      </span>
    </div>
  );
};
