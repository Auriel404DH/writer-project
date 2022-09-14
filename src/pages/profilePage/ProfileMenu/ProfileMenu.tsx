import React from 'react';
import styles from './ProfileMenu.module.scss';

const ProfileMenu = () => {
  return (
    <>
      <div className={styles.menu}>
        <div className={styles.menu__item}>
          <div className={styles.menu__item_key}>Works</div>
          <div className={styles.menu__item_value}>1</div>
        </div>
        <div className={styles.menu__item}>
          <div className={styles.menu__item_key}>Subscriptions</div>
          <div className={styles.menu__item_value}>12</div>
        </div>
        <div className={styles.menu__item}>
          <div className={styles.menu__item_key}>Reviews</div>
          <div className={styles.menu__item_value}>3</div>
        </div>
        <div className={styles.menu__item}>
          <div className={styles.menu__item_key}>Book marks</div>
          <div className={styles.menu__item_value}>84</div>
        </div>
        <div className={styles.menu__item}>
          <div className={styles.menu__item_key}>Liked</div>
          <div className={styles.menu__item_value}>42</div>
        </div>
        <div className={styles.menu__item}>
          <div className={styles.menu__item_key}>Read</div>
          <div className={styles.menu__item_value}>116</div>
        </div>
        <div className={styles.menu__item}>
          <div className={styles.menu__item_key}>Guests</div>
          <div className={styles.menu__item_value}>8</div>
        </div>
        <div className={styles.menu__item}>
          <div className={styles.menu__item_key}>Friends</div>
          <div className={styles.menu__item_value}>2</div>
        </div>
        <div className={styles.menu__item}>
          <div className={styles.menu__item_key}>Achievements</div>
          <div className={styles.menu__item_value}>0</div>
        </div>
        <div className={styles.menu__item}>
          <div className={styles.menu__item_key}>Customization</div>
          <div className={styles.menu__item_value}>№593</div>
        </div>
      </div>
    </>
  );
};

export default ProfileMenu;
