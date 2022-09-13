import React from 'react';
import styles from './header.module.scss';
import logo from '../../../assets/logo.png';
import { Link } from 'react-router-dom';
import { Divider } from 'antd';
import 'antd/dist/antd.min.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="+" />
      </div>
      <nav className={styles.nava}>
        <Link to="/" className={styles.link}>
          Main
        </Link>
        <Divider type="vertical" />
        <Link to="/editor" className={styles.link}>
          Editor
        </Link>
        <Link to="/subscriptions" className={styles.link}>
          Subscriptions
        </Link>
        <Link to="/liked" className={styles.link}>
          Liked
        </Link>
        <Link to="/Profile" className={styles.link}>
          Your profile
        </Link>
      </nav>
    </header>
  );
};

export default Header;
