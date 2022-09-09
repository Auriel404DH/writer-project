import React from 'react';
import styles from './Author.module.scss';
import authorPhoto from '../../assets/author.jpg';

interface IAuthorCard {
  name: string;
  sub: boolean;
}

const Author: React.FC<IAuthorCard> = ({ name, sub }) => {
  return (
    <div className={styles.author}>
      <img className={styles.author__photo} src={authorPhoto} alt="#" />
      <div className={styles.author__name}>{name}</div>
      <div className={styles.author__description}>
        ghdasjhgdjlk hasgdjlhgadjkdgs ghdasjhgdjlkh asgdj lhgad jkdgs ghdasjhgdj lkhasg djlhga d
        jkdgs ghdasjhgdjl khasgdjl hgadjkdgs ghdasjh gdjlkhasgd jlhgadjkdgs ghdasjhgdjlkh
        asgdjlhgadjkdgs ghdasjh gdjlkhasgd jlhgadjkdgs ghdasjhgdjlkh asgdjlhgadjkdgs ghdasjh
        gdjlkhasgd jlhgadjkdgs ghdasjhgdjlkh asgdjlhgadjkdgs
      </div>
      <div className={styles.author__footer}>
        <button className={styles.author__button} type="button">
          {sub ? 'Unsubscribe' : 'Subscribe'}
        </button>
      </div>
    </div>
  );
};

export default Author;
