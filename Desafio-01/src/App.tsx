import './App.css';
import './global.css';

import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { TasksList } from './components/TasksList';

const tasks = [
  {
    id: 1,
    title: 'Completar o curso de React da Rocketseat',
    hasCompleted: false,
  },
];

function App() {
  return (
    <div className='mainAppWrapper'>
      <Header />
      <AddTask />
      <TasksList />
    </div>
  );
}

export default App;
