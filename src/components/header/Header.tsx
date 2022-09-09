import React from 'react';
import styles from './header.module.scss';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.logoImg} src={logo} alt="+" />
      </div>
      <nav className={styles.nava}>
        <Link to="/" className={styles.link}>Main</Link>
        <Link to="/editor" className={styles.link}>Editor</Link>
        <Link to="/subscriptions" className={styles.link}>Subscriptions</Link>
        <Link to="/liked" className={styles.link}>Liked</Link>
        <Link to='/Profile' className={styles.link}>Your profile</Link>
      </nav>
    </header>
  );
};

export default Header;
