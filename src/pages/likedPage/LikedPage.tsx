import React from 'react';
import styles from './likedPage.module.scss';
import CardComponent from '../../components/LikedCard/card';
import Selector from '../../components/selectorComponent/selector';
import 'antd/dist/antd.min.css';

const LikedPage: React.FC = () => {
  return (
    <>
      <div>
        <h1 className={styles.title}>Liked Posts</h1>
      </div>
      <div className={styles.header}>
        <div className={styles.header__left}>
          <div className={styles.left__item}>Total count: 36</div>
          <div className={styles.left__item}>Favorite work: Forest</div>
          <div className={styles.left__item}>Favorite Author: Karmony</div>
        </div>
        <div className={styles.header__right}>
          <Selector />
          <Selector />
          <Selector />
          <Selector />
        </div>
      </div>
      <div className={styles.liked__articles}>
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
    </>
  );
};

export default LikedPage;
