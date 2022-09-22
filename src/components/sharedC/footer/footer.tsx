import React from 'react';
import 'antd/dist/antd.min.css';
import styles from './Footer.module.scss';
import logoFoot from '../../../assets/logo2.png';
import vk_icon from '../../../assets/vk_icon.png';
import inst_icon from '../../../assets/inst_icon.png';
import tg_icon from '../../../assets/tg_icon.png';
import discord_icon from '../../../assets/discord_icon.png';
import { Link } from 'react-router-dom';

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
              <li className={styles.footer__link__mb}>
                <Link to="/Profile" className={styles.footer__link}>
                  Profile
                </Link>
              </li>
              <li className={styles.footer__link__mb}>
                <Link to="/editor" className={styles.footer__link}>
                  Editor
                </Link>
              </li>
              <li className={styles.footer__link__mb}>
                <Link to="/subscriptions" className={styles.footer__link}>
                  Subscription
                </Link>
              </li>
              <li className={styles.footer__link__mb}>
                <Link to="/liked" className={styles.footer__link}>
                  Liked
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.footer__center}>
          <div className="mx-auto mb-2 ">
            <img className="w-24" src={logoFoot} alt="#" />
          </div>
          <div className={styles.footerDown}>Copyright © 2022 B&K Labs Inc. Trademark Policy</div>
        </div>
        <div className={styles.footer__right}>
          <nav className={styles.footer__column}>
            <p className={styles.footer__title}>Contacts</p>
            <ul className={styles.footer__icons}>
              <li>
                <img className={styles.footer__icon} src={vk_icon} alt="vk" />
              </li>
              <li>
                <img className={styles.footer__icon} src={inst_icon} alt="inst" />
              </li>
              <li>
                <img className={styles.footer__icon} src={tg_icon} alt="tg" />
              </li>
              <li>
                <img className={styles.footer__icon} src={discord_icon} alt="discord" />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
