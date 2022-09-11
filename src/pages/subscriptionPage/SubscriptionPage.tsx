import React from 'react';
import Author from '../../components/AuthorCard/Author';
import AuthorRecs from '../../components/AuthorsRecs/AuthorRecs';
import styles from './SubscriptionPage.module.scss';

const Subscription: React.FC = () => {
  const name = ['Bogdankov Nikita', 'Vadim Chetoshnikov'];
  return (
    <div className={styles.subscription}>
      <div className={styles.subscription__title}> Authors you've subscribed</div>
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
        <AuthorRecs names={name} />
      </div>
    </div>
  );
};

export default Subscription;
