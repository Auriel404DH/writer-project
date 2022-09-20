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

  return (
    <>
      <div>
        <h1 className={styles.title}>Liked Posts</h1>
      </div>

      <LikedHeader />

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
