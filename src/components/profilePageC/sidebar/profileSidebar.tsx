import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProfileSidebar.module.scss';

const ProfileSidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__menu}>Menu</div>
      <nav>
        <div className={styles.sidebar__button}>Works</div>
        <div className={styles.sidebar__button}>Readed</div>
        <div className={styles.sidebar__button}>Liked</div>
        <div className={styles.sidebar__button}>Subs</div>
        <div className={styles.sidebar__button}>Reviews</div>
        <div className={styles.sidebar__button}>Achievements</div>
        <div className={styles.sidebar__button}>Privacy</div>
        <div className={styles.sidebar__button}>
          <Link className={styles.sidebar__button__link} to="./settings">Settings</Link>
        </div>
        <div className={styles.sidebar__button}>Exit</div>
      </nav>
    </div>
  );
};

export default ProfileSidebar;
