import React from 'react';
import styles from './ProfileFace.module.scss';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Typography } from 'antd';

const { Title } = Typography;

const ProfileUser = () => {
  return (
    <div className={styles.face}>
      <Avatar shape="square" size={128} icon={<UserOutlined />} />
      <Title
        style={{ color: 'rgb(148 163 184 / var(--tw-text-opacity))', paddingTop: 20 }}
        level={3}
      >
        Vadim Chetoshkin
      </Title>
      <div className={styles.face__online}>Online</div>
      <div className={styles.face__content}>
        <div>
          <div className={styles.face__key}> Works: </div>
          <div className={styles.face__value}>1</div>
        </div>
        <div>
          <div className={styles.face__key}>Subs:</div>
          <div className={styles.face__value}>12</div>
        </div>
        <div>
          <div className={styles.face__key}>Comms:</div>
          <div className={styles.face__value}>13</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
