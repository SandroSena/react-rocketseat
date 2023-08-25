import './App.css';
import './global.css';

import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { Tasks } from './components/Tasks';

function App() {
  return (
    <>
      <Header />
      <AddTask />
      <Tasks />
    </>
  );
}

export default App;
