import React from 'react';
import styles from './ProfileAchieves.module.scss';
import bob from '../../../assets/bob.png';

const ProfileAchieves = () => {
  return (
    <div className={styles.Achieves}>
      <div className={styles.Achieves__text}>Best Achieves</div>
      <div className={styles.Achieves__AchieveContainer}>
        <div className={styles.Achieves__achieve}>
          <img src={bob} alt="#" />
        </div>
        <div className={styles.Achieves__achieve}>
          <img src={bob} alt="#" />
        </div>
        <div className={styles.Achieves__achieve}>
          <img src={bob} alt="#" />
        </div>
        <div className={styles.Achieves__achieve}>
          <img src={bob} alt="#" />
        </div>
        <div className={styles.Achieves__achieve}>
          <img src={bob} alt="#" />
        </div>
        <div className={styles.Achieves__achieve}>
          <img src={bob} alt="#" />
        </div>
        <div className={styles.Achieves__achieve}>
          <img src={bob} alt="#" />
        </div>
        <div className={styles.Achieves__achieve}>
          <img src={bob} alt="#" />
        </div>
        <div className={styles.Achieves__achieve}>
          <img src={bob} alt="#" />
        </div>
      </div>
    </div>
  );
};

export default ProfileAchieves;
