import React from 'react';
import styles from './ProfileMenu.module.scss';

const ProfileMenu = () => {
  return (
    <>
      <div className={styles.menu}>
        <div className={styles.menu__item}>
          <div className={styles.menu__item_key}>Работы</div>
          <div className={styles.menu__item_value}>1</div>
        </div>
        <div className={styles.menu__item}>
          <div className={styles.menu__item_key}>Подписки</div>
          <div className={styles.menu__item_value}>12</div>
        </div>
        <div className={styles.menu__item}>
          <div className={styles.menu__item_key}>Отзывы</div>
          <div className={styles.menu__item_value}>3</div>
        </div>
        <div className={styles.menu__item}>
          <div className={styles.menu__item_key}>Закладки</div>
          <div className={styles.menu__item_value}>84</div>
        </div>
        <div className={styles.menu__item}>
          <div className={styles.menu__item_key}>Лайкнутые</div>
          <div className={styles.menu__item_value}>42</div>
        </div>
        <div className={styles.menu__item}>
          <div className={styles.menu__item_key}>Прочитанные</div>
          <div className={styles.menu__item_value}>116</div>
        </div>
        <div className={styles.menu__item}>
          <div className={styles.menu__item_key}>Гости</div>
          <div className={styles.menu__item_value}>8</div>
        </div>
        <div className={styles.menu__item}>
          <div className={styles.menu__item_key}>Друзья</div>
          <div className={styles.menu__item_value}>2</div>
        </div>
        <div className={styles.menu__item}>
          <div className={styles.menu__item_key}>Достижения</div>
          <div className={styles.menu__item_value}>0</div>
        </div>
        <div className={styles.menu__item}>
          <div className={styles.menu__item_key}>Кастомизация</div>
          <div className={styles.menu__item_value}>№593</div>
        </div>
      </div>
    </>
  );
};

export default ProfileMenu;
