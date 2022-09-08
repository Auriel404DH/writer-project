import React from 'react';
import styles from './header.module.scss';
import logo from '../../assets/logo.png';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.logoImg} src={logo} alt="+" />
      </div>
      <nav className={styles.nava}>
        <a className={styles.link}>Main</a>
        <a className={styles.link}>Editor</a>
        <a className={styles.link}>Subscriptions</a>
        <a className={styles.link}>Liked</a>
        <a className={styles.link}>Your account</a>
      </nav>
    </header>
  );
};

export default Header;
