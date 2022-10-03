import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProfileMenu.module.scss';

const ProfileMenu = () => {
  return (
    <>
      <div className={styles.menu}>
        <div className={styles.menu__item}>
          <div className={styles.menu__item__key}>Works</div>
          <div className={styles.menu__item__value}>1</div>
        </div>
        <div className={styles.menu__item}>
          <div className={styles.menu__item__key}>Readed</div>
          <div className={styles.menu__item__value}>116</div>
        </div>
        <div className={styles.menu__item}>
          <div className={styles.menu__item__key}>Liked</div>
          <div className={styles.menu__item__value}>42</div>
        </div>
        <div className={styles.menu__item}>
          <div className={styles.menu__item__key}>Subs</div>
          <div className={styles.menu__item__value}>12</div>
        </div>
        <div className={styles.menu__item}>
          <div className={styles.menu__item__key}>Reviews</div>
          <div className={styles.menu__item__value}>3</div>
        </div>
        <div className={styles.menu__item}>
          <div className={styles.menu__item__key}>Book marks</div>
          <div className={styles.menu__item__value}>84</div>
        </div>
        <div className={styles.menu__item}>
          <div className={styles.menu__item__key}>Guests</div>
          <div className={styles.menu__item__value}>8</div>
        </div>
        <div className={styles.menu__item}>
          <div className={styles.menu__item__key}>Achievements</div>
          <div className={styles.menu__item__value}>0</div>
        </div>
        <div className={styles.menu__item}>
          <div>
            <Link className={styles.menu__item__key} to="/Profile/Settings">Settings</Link>
          </div>
        </div>
        <div className={styles.menu__item}>
          <div className={styles.menu__item__key}>Customization</div>
          <div className={styles.menu__item__value}>№593</div>
        </div>
      </div>
    </>
  );
};

export default ProfileMenu;
