import React from 'react';
import Article from '../mainPage/article/Article';
import styles from './likedPage.module.scss';

const LikedPage: React.FC = () => {
    const name = [
        "Nikita Bogdankov",
        "Vadim Chetoshnikov"
    ]
    return (
        <div className={styles.liked}>
            <div className={styles.liked__title}>Articles you've liked</div>
            <div className={styles.liked__articles}>
                <Article name={name[0]} />
                <Article name={name[1]} />
                <Article name={name[0]} />
                <Article name={name[1]} />
            </div>
        </div>
    );
  };
  
  export default LikedPage;