import { Avatar } from './Avatar';
import { PencilLine } from 'phosphor-react';
import styles from './Sidebar.module.css';

export const Siderbar = () => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src='https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50'
        alt=''
      />
      <div className={styles.profile}>
        <Avatar src='https://avatars.githubusercontent.com/u/6891210?v=4' />
        <strong>Sandro Sena</strong>
        <span>Front End Developer</span>
      </div>
      <footer>
        <a href='#' target='_blank'>
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
};
