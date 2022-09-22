import React from 'react';
import cl from 'classnames';
import styles from './Tags.module.scss';
import stylesBG from '../../../../styles/bg.module.scss';

interface ITags {
  genre: string;
  status: string;
  rating: string;
  chapters: number;
  Fandom: string;
}

const Tags: React.FC<ITags> = ({ genre, status, rating, chapters, Fandom }) => {
  const genreClass = cl({
    [stylesBG.Bg__indigo]: genre === 'Fantasy',
    [stylesBG.Bg__darkRed]: genre === 'Novel',
    [stylesBG.Bg__AnotherRed]: genre === 'Romance',
    [stylesBG.Bg__gray]: genre === 'Detective',
    [stylesBG.Bg__purple]: genre === 'Mistic',
    [stylesBG.Bg__yellow]: genre === 'Historical',
    [stylesBG.Bg__lime]: genre === 'Adventure',
    [stylesBG.Bg__pink]: genre === 'Humor',
    [stylesBG.Bg__white]: genre === 'Friendship',
    [stylesBG.Bg__rose]: genre === 'Drama',
    [stylesBG.Bg__cyan]: genre === 'Angst',
    [stylesBG.Bg__black]: genre === 'Crime',
    [stylesBG.Bg__orange]: genre === 'Family',
  });

  const statusClass = cl({
    [stylesBG.Bg__green]: status === 'Completed',
    [stylesBG.Bg__yellow]: status === 'In process',
    [stylesBG.Bg__AnotherCyan]: status === 'Abandoned',
    [stylesBG.Bg__red]: status === 'Сanceled',
  });

  const chapterClass = cl({
    [stylesBG.Bg__gradient_whiteGray]: chapters > 0 && chapters <= 10,
    [stylesBG.Bg__gradient_grayOrange]: chapters > 10 && chapters <= 20,
    [stylesBG.Bg__gradient_zinkRed]: chapters > 20 && chapters <= 30,
    [stylesBG.Bg__white]: chapters > 30,
  });

  const ratingClass = cl({
    [stylesBG.Bg__purple]: rating === 'G',
    [stylesBG.Bg__lime]: rating === 'PG',
    [stylesBG.Bg__yellow]: rating === 'PG-13',
    [stylesBG.Bg__red]: rating === 'R',
    [stylesBG.Bg__black]: rating === 'NC-17',
  });

  return (
    <div className={styles.Post__right_tags}>
      <div className={genreClass}>{genre}</div>
      <div className={statusClass}>{status}</div>
      <div className={stylesBG.Bg__fandom}>{Fandom}</div>
      <div className={chapterClass}>{chapters}</div>
      <div className={ratingClass}>{rating}</div>
    </div>
  );
};

export default Tags;
