import React from 'react';
import 'antd/dist/antd.min.css';
import styles from './Main.module.scss';
import HeaderS from './header/Header';
import FooterS from './footer/Footer';
import { Layout } from 'antd';

interface Imain {
  children: any;
}

const MainLayout: React.FC<Imain> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <HeaderS />
      <Layout>
        <main className={styles.main}>{children}</main>
      </Layout>
      <FooterS />
    </div>
  );
};

export default MainLayout;
