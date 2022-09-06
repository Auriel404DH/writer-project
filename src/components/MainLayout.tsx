import React from 'react';
import styles from './Main.module.scss';
import Header from './header/Header';
import Footer from './footer/Footer';

interface Imain {
  children: any;
}

const MainLayout: React.FC<Imain> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.app}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
