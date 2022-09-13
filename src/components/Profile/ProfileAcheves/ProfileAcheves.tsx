import React from 'react';
import styles from './ProfileAcheves.module.scss';
import bob from '../../../assets/bob.png';

const ProfileAcheves = () => {
  return (
    <div className={styles.Acheves}>
      <div className={styles.Acheves__text}>Acheves</div>
      <div className={styles.Acheves__AcheveContainer}>
        <div className={styles.Acheves__acheve}>
          <img src={bob} alt="#" />
        </div>
        <div className={styles.Acheves__acheve}>
          <img src={bob} alt="#" />
        </div>
        <div className={styles.Acheves__acheve}>
          <img src={bob} alt="#" />
        </div>
        <div className={styles.Acheves__acheve}>
          <img src={bob} alt="#" />
        </div>
        <div className={styles.Acheves__acheve}>
          <img src={bob} alt="#" />
        </div>
        <div className={styles.Acheves__acheve}>
          <img src={bob} alt="#" />
        </div>
        <div className={styles.Acheves__acheve}>
          <img src={bob} alt="#" />
        </div>
        <div className={styles.Acheves__acheve}>
          <img src={bob} alt="#" />
        </div>
        <div className={styles.Acheves__acheve}>
          <img src={bob} alt="#" />
        </div>
      </div>
    </div>
  );
};

export default ProfileAcheves;
