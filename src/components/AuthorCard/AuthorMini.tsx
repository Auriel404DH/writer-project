import React from 'react';
import styles from './AuthorMini.module.scss';
import authorPhoto from '../../assets/author.jpg';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Typography } from 'antd';

interface IAuthorCard {
  name: string;
  sub: boolean;
}

const { Title } = Typography;

const AuthorMini: React.FC<IAuthorCard> = ({ name, sub }) => {
  return (
    <div className={styles.author}>
      <div className={styles.author__header}>
        <Avatar size={48} src={authorPhoto} icon={<UserOutlined />} />
      </div>
      <div className={styles.author__main}>
        <Title level={5}>
          <div className={styles.author__name}>{name}</div>
        </Title>
      </div>
    </div>
  );
};

export default AuthorMini;
