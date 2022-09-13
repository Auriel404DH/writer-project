import React from 'react';
import picka from '../../../assets/footerLogo.png';
import styles from './ProfilePost.module.scss';
import { Tag, Typography } from 'antd';

const { Title } = Typography;

const ProfilePost = () => {
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
          <Title
            style={{ color: 'rgb(148 163 184 / var(--tw-text-opacity))', paddingTop: 6 }}
            level={4}
          >
            Soul's Life
          </Title>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi animi deserunt officia
            tenetur id enim veritatis modi hic sed nam rem, voluptates nihil adipisci, tempora odit
            facilis reprehenderit corrupti accusantium? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Sequi animi deserunt officia tenetur id enim veritatis modi hic sed
            nam rem, voluptates nihil adipisci, tempora odit facilis reprehenderit corrupti
            accusantium?
          </div>
        </div>
        <div className={styles.Post__right_tags}>
          <Tag color="red">Fantastic</Tag>
          <Tag color="gold">Completed</Tag>
          <Tag color="purple">R</Tag>
          <Tag color="blue">32 главы</Tag>
          <Tag color="black">qwe</Tag>
        </div>
      </div>
    </div>
  );
};

export default ProfilePost;
