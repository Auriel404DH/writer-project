import React from 'react';
import 'antd/dist/antd.min.css';
import styles from './Main.module.scss';
import Header from '../header/header';
import Footer from '../footer/footer';
import { Layout } from 'antd';

interface Imain {
  children: React.ReactNode;
}

const MainLayout: React.FC<Imain> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Layout>
        <main className={styles.main}>{children}</main>
      </Layout>
      <Footer />
    </div>
  );
};

export default MainLayout;
