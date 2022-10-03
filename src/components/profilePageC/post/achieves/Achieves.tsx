import React from 'react';
import styles from './Achieves.module.scss';

interface IAchieves {
  postAchieves: string[];
}

const Achieves: React.FC<IAchieves> = ({ postAchieves }) => {
  return (
    <div className={styles.Post__right_achieves}>
      {postAchieves.map((item) => {
        return (
          <div key={item} className={styles.Post__right_achieve}>
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default Achieves;
