import React from 'react';
import styles from './otherInfo.module.scss';

const OtherInfo = () => {
  return (
    <div className={styles.header__left}>
      <div className={styles.header__firstItem}>Other Information</div>
      <div className="grid grid-cols-2">
        <div className={styles.header__item}>
          <div className={styles.header__upItem}>Authors</div>
          <div className={styles.header__downItem}>24</div>
        </div>
        <div className={styles.header__item}>
          <div className={styles.header__upItem}>Likes</div>
          <div className={styles.header__downItem}>118</div>
        </div>
        <div className={styles.header__item}>
          <div className={styles.header__upItem}>Words</div>
          <div className={styles.header__downItem}>3167</div>
        </div>
        <div className={styles.header__item}>
          <div className={styles.header__upItem}>Count</div>
          <div className={styles.header__downItem}>17</div>
        </div>
        <div className={styles.header__item}>
          <div className={styles.header__upItem}>Favorite Author</div>
          <div className={styles.header__downItem_active}>Karmony</div>
        </div>
        <div className={styles.header__item}>
          <div className={styles.header__upItem}>Favorite genre</div>
          <div className={styles.header__downItem_active}>Fantasy</div>
        </div>
        <div className={styles.header__item}>
          <div className={styles.header__upItem}>Favorite work</div>
          <div className={styles.header__downItem_active}>Forest</div>
        </div>
        <div className={styles.header__item}>
          <div className={styles.header__upItem}>Favorite fandom</div>
          <div className={styles.header__downItem_active}>TMNT</div>
        </div>
      </div>
    </div>
  );
};

export default OtherInfo;
