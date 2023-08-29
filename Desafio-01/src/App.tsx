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
    hasCompleted: true,
  },
  {
    id: 2,
    content: 'Completar o curso de React Native da Rocketseat',
    hasCompleted: false,
  },
];

function App() {
  const [tasks, setTasks] = useState([...mockedTasks]);

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToogleCompletedTask = (taskId: number) => {
    const updatedCompletedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          hasCompleted: !task.hasCompleted,
        };
      }
      return task;
    });

    setTasks(updatedCompletedTasks);
  };

  return (
    <div className='mainAppWrapper'>
      <Header />
      <AddTask onAddTask={(task) => setTasks([...tasks, task])} />
      <div>
        <TasksList
          tasks={tasks}
          onDeleteTask={handleDeleteTask}
          onCompleteTask={handleToogleCompletedTask}
        />
      </div>
    </div>
  );
}

export default App;
