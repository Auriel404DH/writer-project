import React from 'react';
import styles from './ProfileSidebar.module.scss';

const ProfileSidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__menu}>Menu</div>
      <nav>
        <div className={styles.sidebar__button}>Works</div>
        <div className={styles.sidebar__button}>Collections</div>
        <div className={styles.sidebar__button}>Reviews</div>
        <div className={styles.sidebar__button}>Liked</div>
        <div className={styles.sidebar__button}>Achievements</div>
        <div className={styles.sidebar__button}>Privacy</div>
        <div className={styles.sidebar__button}>Settings</div>
        <div className={styles.sidebar__button}>Exit</div>
      </nav>
    </div>
  );
};

export default ProfileSidebar;
