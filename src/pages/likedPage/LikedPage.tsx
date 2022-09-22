import React from 'react';
import styles from './likedPage.module.scss';
import { CardComponent, LikedHeader } from '../../components/likedPageC';
import 'antd/dist/antd.min.css';

const LikedPage: React.FC = () => {
  const PostData = {
    genre: 'Romance',
    status: 'Completed',
    rating: 'NC-17',
    chapters: 51,
    fandom: 'TMNT',
  };

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

  const favoriteWork = 'Forest';

  return (
    <>
      <div>
        <h1 className={styles.title}>Liked Posts</h1>
      </div>

      <LikedHeader
        likedPage={true}
        favorite={favoriteWork}
        genres={genres}
        status={status}
        sort={sort}
        rating={rating}
      />

      <div className={styles.liked__articles}>
        <CardComponent
          genre={PostData.genre}
          status={PostData.status}
          rating={PostData.rating}
          chapters={PostData.chapters}
          fandom={PostData.fandom}
        />
        <CardComponent
          genre={PostData.genre}
          status={PostData.status}
          rating={PostData.rating}
          chapters={PostData.chapters}
          fandom={PostData.fandom}
        />
        <CardComponent
          genre={PostData.genre}
          status={PostData.status}
          rating={PostData.rating}
          chapters={PostData.chapters}
          fandom={PostData.fandom}
        />
        <CardComponent
          genre={PostData.genre}
          status={PostData.status}
          rating={PostData.rating}
          chapters={PostData.chapters}
          fandom={PostData.fandom}
        />
        <CardComponent
          genre={PostData.genre}
          status={PostData.status}
          rating={PostData.rating}
          chapters={PostData.chapters}
          fandom={PostData.fandom}
        />
        <CardComponent
          genre={PostData.genre}
          status={PostData.status}
          rating={PostData.rating}
          chapters={PostData.chapters}
          fandom={PostData.fandom}
        />
        <CardComponent
          genre={PostData.genre}
          status={PostData.status}
          rating={PostData.rating}
          chapters={PostData.chapters}
          fandom={PostData.fandom}
        />
      </div>
    </>
  );
};

export default LikedPage;
