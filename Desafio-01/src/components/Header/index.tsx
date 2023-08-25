import styles from './style.module.css';
import rocketIcon from '../../assets/rocket.svg';

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={rocketIcon} alt='rocket logo' className={styles.rocket} />
      <span className={styles.to}>to</span>
      <span className={styles.do}>do</span>
    </header>
  );
};
