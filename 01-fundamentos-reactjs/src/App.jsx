// JSX = Javascript + XML

import './global.css';
import styles from './App.module.css';
import { Header } from './components/Header';
import { Siderbar } from './components/Sidebar';
import { Post } from './components/Post';

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Siderbar />
        <Post />
      </div>
    </>
  );
}

export default App;
