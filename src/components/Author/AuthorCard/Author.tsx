import React from 'react';
import styles from './Author.module.scss';
import authorPhoto from '../../../assets/author.jpg';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Typography } from 'antd';

interface IAuthorCard {
  name: string;
  sub: boolean;
}

const { Title } = Typography;

const Author: React.FC<IAuthorCard> = ({ name, sub }) => {
  return (
    <div className={styles.author}>
      <div className={styles.author__header}>
        <Avatar size={100} src={authorPhoto} icon={<UserOutlined />} />
      </div>
      <div className={styles.author__main}>
        <Title level={3}>
          <div className={styles.author__name}>{name}</div>
        </Title>
        <div className={styles.author__description}>
          <div className={styles.author__tags}>Works: 36</div>
          <div className={styles.author__tags}>Subs: 36</div>
          <div className={styles.author__tags}>Likes: 36</div>
          <div className={styles.author__tags}>Rate: 36</div>
        </div>
      </div>
      <div className={styles.author__footer}>
        <div className={styles.author__button}>{sub ? 'Unsub' : 'Sub'}</div>
        <div className={styles.author__button}>Profile</div>
        <div className={styles.author__button}>Works</div>
      </div>
    </div>
  );
};

export default Author;
