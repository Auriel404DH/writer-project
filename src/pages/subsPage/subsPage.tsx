import React from 'react';
import { Author, AuthorRecs } from '../../components/subsPageC';
import { LikedHeader } from '../../components/likedPageC';
import styles from './SubscriptionPage.module.scss';
import 'antd/dist/antd.min.css';

const Subscription: React.FC = () => {
  const name = ['Bogdankov Nikita', 'Vadim Chetoshnikov'];

  const favoriteAuthor = 'Vadim Chetoshkin';

  const genres = [
    'Fantasy',
    'Novel',
    'Romance',
    'Detective',
    'Mistic',
    'Historical',
    'Adventure',
    'Drama',
    'Humor',
    'Crime',
    'Angst',
    'Friendship',
    'Family',
  ];
  const status = ['Completed', 'In Process', 'Abandoned', 'Canceled'];
  const sort = ['By name', 'By count', 'By rating', 'By genre', 'By status', 'By likes'];
  const rating = ['G', 'PG', 'PG-13', 'R', 'NC-17'];

  return (
    <div className={styles.subscription}>
      <div className={styles.subscription__title}> Authors you've subscribed</div>
      <LikedHeader
        likedPage={false}
        favorite={favoriteAuthor}
        genres={genres}
        status={status}
        sort={sort}
        rating={rating}
      />
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
        <div className="right-10 fixed">
          <AuthorRecs names={name} />
        </div>
      </div>
    </div>
  );
};

export default Subscription;
