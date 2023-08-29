import './App.css';
import './global.css';

import { useState } from 'react';

import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { TasksList } from './components/TasksList';

export interface Task {
  id: number;
  content: string;
  hasCompleted: boolean;
}

const mockedTasks: Task[] = [
  {
    id: 1,
    content: 'Completar o curso de React da Rocketseat',
    hasCompleted: false,
  },
  {
    id: 2,
    content:
      'Completar o curso para virar um bom programar e ganhar muito dinheiro!!!',
    hasCompleted: true,
  },
];

function App() {
  const [tasks, setTasks] = useState([...mockedTasks]);

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };


  return (
    <div className='mainAppWrapper'>
      <Header />
      <AddTask onAddTask={(task) => setTasks([...tasks, task])} />
      <div>
        <TasksList tasks={tasks} onDeleteTask={handleDeleteTask} />
      </div>
    </div>
  );
}

export default App;
