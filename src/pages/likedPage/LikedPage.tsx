import React from 'react';
import styles from './likedPage.module.scss';
import CardComponent from '../../sharedComponents/ArticleComponent/ArticleCard/ArticleCard';
import Selector from '../../sharedComponents/selectorComponent/selector';
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
          <Selector tag1={'Romantic'} tag2={'Horror'} tag3={'Fantastic'} tag4={'Novel'} />
          <Selector tag1={'By Name'} tag2={'By popular'} tag3={'By likes'} tag4={'By my list'} />
          <Selector tag1={'1 month'} tag2={'2 weeks'} tag3={'week'} tag4={'3 days'} />
          <Selector tag1={'A'} tag2={'B'} tag3={'S'} tag4={'R'} />
        </div>
      </div>
      <div className={styles.liked__articles}>
        <CardComponent />
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
