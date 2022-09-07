import React from 'react';
import 'antd/dist/antd.min.css';
import styles from './footer.module.scss';
import logoFoot from '../../assets/footerLogo.png';
import { InstagramOutlined } from '@ant-design/icons';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.footer__left}>
          <nav className={styles.footer__column}>
            <p className={styles.footer__title}>Help</p>
            <ul>
              <li className={styles.footer__link}>
                <a>Helpers</a>
              </li>
              <li className={styles.footer__link}>
                <a>Site News</a>
              </li>
              <li className={styles.footer__link}>
                <a>Rules</a>
              </li>
              <li className={styles.footer__link}>
                <a>FAQ</a>
              </li>
            </ul>
          </nav>
          <nav className={styles.footer__column}>
            <p className={styles.footer__title}>Navigate</p>
            <ul>
              <li className={styles.footer__link}>
                <a>Subs</a>
              </li>
              <li className={styles.footer__link}>
                <a>Liked</a>
              </li>
              <li className={styles.footer__link}>
                <a>Poems</a>
              </li>
              <li className={styles.footer__link}>
                <a>Novels</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.footer__center}>
          <div className="mx-auto mb-4">
            <img className="w-24" src={logoFoot} />
          </div>
          <div className={styles.footerDown}>Copyright © 2022 V&K Labs Inc. Trademark Policy</div>
        </div>
        <div className={styles.footer__right}>
          <nav className={styles.footer__column}>
            <p className={styles.footer__title}>Contacts</p>
            <ul>
              <li className={styles.footer__link}>
                <a>VK: </a>
              </li>
              <li className={styles.footer__link}>
                <a>Inst: </a>
              </li>
              <li className={styles.footer__link}>
                <a>TG: </a>
              </li>
              <li className={styles.footer__link}>
                <a>Disc: </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
