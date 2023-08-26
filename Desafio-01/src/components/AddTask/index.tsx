import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './style.module.css';
import plusIcon from './../../assets/plus.svg';

export const AddTask = () => {
  const [taskList, setTaskList] = useState(['']);
  const [createNewTask, setCreateNewTask] = useState('');

  const handleCreateTask = (e: FormEvent) => {
    e.preventDefault();

    setTaskList([...taskList, createNewTask]);
  };

  const handleNewTaskChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCreateNewTask(e.target.value);
    console.log(e.target.value);
  };

  return (
    <form onSubmit={handleCreateTask}>
      <div className={styles.addTaskWrapper}>
        <input
          type='text'
          onChange={handleNewTaskChange}
          placeholder='Adicione uma nova tarefa'
          value={createNewTask}
        />
        <button type='submit' className={styles.buttonCreate}>
          Criar
          <img src={plusIcon} alt='Plus icon' />
        </button>
      </div>
    </form>
  );
};
