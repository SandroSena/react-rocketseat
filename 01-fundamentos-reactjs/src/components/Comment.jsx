import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';

export const Comment = ({ content, onDeleteComment }) => {
  const handleDeleteComment = () => {
    onDeleteComment(content);
  };

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src='https://avatars.githubusercontent.com/u/6891210?v=4'
        alt=''
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Sandro Sena</strong>
              <time title='21 de agosto de 2023' dateTime='2023-08-21'>
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
