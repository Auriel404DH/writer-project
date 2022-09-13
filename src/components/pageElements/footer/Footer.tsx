import React from 'react';
import 'antd/dist/antd.min.css';
import styles from './footer.module.scss';
import logoFoot from '../../../assets/footerLogo.png';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.footer__left}>
          <nav className={styles.footer__column}>
            <p className={styles.footer__title}>Help</p>
            <ul>
              <li className={styles.footer__link}>Helpers</li>
              <li className={styles.footer__link}>Site News</li>
              <li className={styles.footer__link}>Rules</li>
              <li className={styles.footer__link}>FAQ</li>
            </ul>
          </nav>
          <nav className={styles.footer__column}>
            <p className={styles.footer__title}>Navigate</p>
            <ul>
              <li className={styles.footer__link}>Subs</li>
              <li className={styles.footer__link}>Liked</li>
              <li className={styles.footer__link}>Poems</li>
              <li className={styles.footer__link}>Novels</li>
            </ul>
          </nav>
        </div>
        <div className={styles.footer__center}>
          <div className="mx-auto mb-4">
            <img className="w-24" src={logoFoot} alt="#" />
          </div>
          <div className={styles.footerDown}>Copyright © 2022 V&K Labs Inc. Trademark Policy</div>
        </div>
        <div className={styles.footer__right}>
          <nav className={styles.footer__column}>
            <p className={styles.footer__title}>Contacts</p>
            <ul>
              <li className={styles.footer__link}>VK:</li>
              <li className={styles.footer__link}>Inst:</li>
              <li className={styles.footer__link}>TG:</li>
              <li className={styles.footer__link}>Disc:</li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
