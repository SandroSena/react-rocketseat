import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './style.module.css';
import plusIcon from './../../assets/plus.svg';
import { Task } from '../../App';

interface AddTaskProps {
  onAddTask: (task: Task) => void;
}

export const AddTask = ({ onAddTask }: AddTaskProps) => {
  const [createNewTaskContent, setCreateNewTaskContent] = useState('');

  const handleCreateTask = (e: FormEvent) => {
    e.preventDefault();

    onAddTask({
      id: Math.random(),
      content: createNewTaskContent,
      hasCompleted: false,
    });

    setCreateNewTaskContent('');
  };

  const handleNewTaskChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCreateNewTaskContent(e.target.value);
  };

  return (
    <form onSubmit={handleCreateTask}>
      <div className={styles.addTaskWrapper}>
        <input
          type='text'
          onChange={handleNewTaskChange}
          placeholder='Adicione uma nova tarefa'
          value={createNewTaskContent}
        />
        <button type='submit' className={styles.buttonCreate}>
          Criar
          <img src={plusIcon} alt='Plus icon' />
        </button>
      </div>
    </form>
  );
};
