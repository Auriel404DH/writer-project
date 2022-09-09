import React from 'react';

import styles from './likedPage.module.scss';
import CardComponent from '../../components/LikedCard/card';
import { Select } from 'antd';
import 'antd/dist/antd.min.css';

const { Option } = Select;

const LikedPage: React.FC = () => {
  return (
    <>
      <div>
        <h1 className={styles.title}>Liked Posts</h1>
      </div>
      <div className={styles.header}>
        <div className={styles.header__left}>
          <div className={styles.left__item}>Total count: 36</div>
          <div className={styles.left__item}>Favorite work: Forest</div>
          <div className={styles.left__item}>Favorite Author: Karmony</div>
        </div>
        <div className={styles.header__right}>
          <div className={styles.selectorStyle}>
            <Select defaultValue="Fantastic" bordered={false}>
              <Option value="jack">Horror</Option>
              <Option value="lucy">Humor</Option>
              <Option value="Yiminghe">Fantastic</Option>
              <Option value="Yiminghe">Romantic</Option>
            </Select>
          </div>
          <div className={styles.selectorStyle}>
            <Select defaultValue="Fantastic" bordered={false}>
              <Option value="jack">Horror</Option>
              <Option value="lucy">Humor</Option>
              <Option value="Yiminghe">Fantastic</Option>
              <Option value="Yiminghe">Romantic</Option>
            </Select>
          </div>
          <div className={styles.selectorStyle}>
            <Select defaultValue="Fantastic" bordered={false}>
              <Option value="jack">Horror</Option>
              <Option value="lucy">Humor</Option>
              <Option value="Yiminghe">Fantastic</Option>
              <Option value="Yiminghe">Romantic</Option>
            </Select>
          </div>
          <div className={styles.selectorStyle}>
            <Select defaultValue="Fantastic" bordered={false}>
              <Option value="Horror">Horror</Option>
              <Option value="Humor">Humor</Option>
              <Option value="Fantastic">Fantastic</Option>
              <Option value="Romantic">Romantic</Option>
            </Select>
          </div>
        </div>
      </div>
      <div className={styles.liked__articles}>
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
    </>
  );
};

export default LikedPage;
