import './App.css';
import './global.css';

import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { TasksList } from './components/TasksList';
import { Tasks } from './components/Tasks';

const tasks = [
  {
    id: 1,
    content: ['Completar o curso de React da Rocketseat'],
    hasCompleted: false,
  },
  {
    id: 2,
    content: [
      'Completar o curso para virar um bom programar e ganhar muito dinheiro!!!',
    ],
    hasCompleted: true,
  },
];

function App() {
  return (
    <div className='mainAppWrapper'>
      <Header />
      <AddTask />
      <div>
        <TasksList />
        {tasks.map((task) => {
          return (
            <Tasks
              key={task.id}
              content={task.content}
              hasCompleted={task.hasCompleted}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
