import React from 'react';
import { Author, AuthorRecs } from '../../components/subsPageC';
import { Selector } from '../../components/likedPageC';
import styles from './SubscriptionPage.module.scss';
import 'antd/dist/antd.min.css';

const Subscription: React.FC = () => {
  const name = ['Bogdankov Nikita', 'Vadim Chetoshnikov'];
  return (
    <div className={styles.subscription}>
      <div className={styles.subscription__title}> Authors you've subscribed</div>
      <div className={styles.subscription__filter}>
        <div className={styles.subscription__left}>
          <div className={styles.left__item}>Total count: 12</div>
          <div className={styles.left__item}>Favorite Genre: Romance</div>
          <div className={styles.left__item}>Favorite Author: Karmony</div>
        </div>
        <div className={styles.subscription__right}>
          <Selector tag1={'Romantic'} tag2={'Horror'} tag3={'Fantastic'} tag4={'Novel'} />
          <Selector tag1={'By Name'} tag2={'By popular'} tag3={'By likes'} tag4={'By my list'} />
          <Selector tag1={'1 month'} tag2={'2 weeks'} tag3={'week'} tag4={'3 days'} />
          <Selector tag1={'A'} tag2={'B'} tag3={'S'} tag4={'R'} />
        </div>
      </div>

      <div className={styles.subscription__container}>
        <div className={styles.subscription__authors}>
          <Author name={name[0]} sub={true} />
          <Author name={name[0]} sub={true} />
          <Author name={name[0]} sub={true} />
          <Author name={name[0]} sub={true} />
          <Author name={name[0]} sub={true} />
          <Author name={name[0]} sub={true} />
          <Author name={name[0]} sub={true} />
          <Author name={name[0]} sub={true} />
          <Author name={name[0]} sub={true} />
          <Author name={name[0]} sub={true} />
          <Author name={name[0]} sub={true} />
          <Author name={name[0]} sub={true} />
          <Author name={name[0]} sub={true} />
          <Author name={name[0]} sub={true} />
          <Author name={name[0]} sub={true} />
        </div>
        <div className="fixed right-8">
          <AuthorRecs names={name} />
        </div>
      </div>
    </div>
  );
};

export default Subscription;
