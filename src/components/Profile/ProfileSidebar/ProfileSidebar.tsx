import React from 'react';
import styles from './ProfileSidebar.module.scss';

const ProfileSidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__menu}>Menu</div>
      <nav>
        <div className={styles.sidebar__button}>Работы</div>
        <div className={styles.sidebar__button}>Сборники</div>
        <div className={styles.sidebar__button}>Рецензии</div>
        <div className={styles.sidebar__button}>Лайкнутые</div>
        <div className={styles.sidebar__button}>Награды</div>
        <div className={styles.sidebar__button}>Приватность</div>
        <div className={styles.sidebar__button}>Настройки</div>
        <div className={styles.sidebar__button}>Выход</div>
      </nav>
    </div>
  );
};

export default ProfileSidebar;
