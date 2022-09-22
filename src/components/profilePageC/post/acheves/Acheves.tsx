import React from 'react';
import styles from './Acheves.module.scss';

interface IAcheves {
  postAcheves: string[];
}

const Acheves: React.FC<IAcheves> = ({ postAcheves }) => {
  return (
    <div className={styles.Post__right_acheves}>
      {postAcheves.map((item) => {
        return (
          <div key={item} className={styles.Post__right_acheve}>
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default Acheves;
