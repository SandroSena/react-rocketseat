// JSX = Javascript + XML

import './global.css';
import styles from './App.module.css';
import { Header } from './components/Header';
import { Siderbar } from './components/Sidebar';

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Siderbar />
        <main>main</main>
      </div>
    </>
  );
}

export default App;
