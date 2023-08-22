import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';

export const Post = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src='https://github.com/sandrosena.png' />
          <div className={styles.authorInfo}>
            <strong>Sandro Sena</strong>
            <span>Front-End Developer</span>
          </div>
        </div>

        <time title='21 de agosto de 2023' dateTime='2023-08-21'>
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href='#'> jane.design/doctorcare</a>{' '}
        </p>
        <p>
          <a href='#'>#novoprojeto</a> <a href='#'>#nlw </a>{' '}
          <a href='#'>#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder='Deixe um comentario' />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
};
