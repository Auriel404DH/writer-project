import React from 'react';
import Acheves from './acheves/Acheves';
import Tags from './tags/Tags';
import picka from '../../../assets/footerLogo.png';
import styles from './ProfilePost.module.scss';
import { Typography } from 'antd';
const { Title } = Typography;

const ProfilePost: React.FC = () => {
  const PostAcheves = ['qwe', 'qwe2', 'qwe3'];

  const TagsData = {
    genre: 'Fantasy',
    status: 'Completed',
    rating: 'NC-17',
    chapters: 27,
    Fandom: 'TMNT',
  };

  return (
    <div className={styles.Post}>
      <div className={styles.Post__left}>
        <div className={styles.Post__left_theme}>
          <div className={styles.Post__left_key}>Visits</div>
          <div className={styles.Post__left_value}>12</div>
        </div>
        <div className={styles.Post__left_theme}>
          <div className={styles.Post__left_key}>Likes</div>
          <div className={styles.Post__left_value}>114</div>
        </div>
        <div className={styles.Post__left_theme}>
          <div className={styles.Post__left_key}>Comments</div>
          <div className={styles.Post__left_value}>11</div>
        </div>
        <div className={styles.Post__left_theme}>
          <div className={styles.Post__left_key}>Adds</div>
          <div className={styles.Post__left_value}>7</div>
        </div>
      </div>

      <div className={styles.Post__right}>
        <div className={styles.Post__right_img}>
          <img src={picka} alt="#" />
        </div>
        <div className={styles.Post__right_text}>
          <Title level={4}>
            <div className={styles.Post__right_title}>Soul's Life</div>
          </Title>
          <div>
            Description Description Description Description Description Description Description
            Description Description
          </div>
          <Acheves postAcheves={PostAcheves} />
        </div>
        <Tags
          genre={TagsData.genre}
          status={TagsData.status}
          rating={TagsData.rating}
          chapters={TagsData.chapters}
          Fandom={TagsData.Fandom}
        />
      </div>
    </div>
  );
};

export default ProfilePost;
