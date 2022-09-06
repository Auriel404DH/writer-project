import React from 'react';
import styles from './Main.module.scss';
import logo from '../assets/logo.png';
import logoFoot from '../assets/footerLogo.png';

interface Imain {
  children: any;
}

const MainLayout: React.FC<Imain> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.app}>
        <header className={styles.header}>
          <div className={styles.logo}>
            <img className={styles.logoImg} src={logo} alt="" />
          </div>
          <nav className={styles.nava}>
            <a className={styles.link}>Главная</a>
            <a className={styles.link}>Редактор</a>
            <a className={styles.link}>Подписки</a>
            <a className={styles.link}>Закладки</a>
            <a className={styles.link}>Кабинет</a>
          </nav>
        </header>

        <main className={styles.main}>{children}</main>

        <footer>
          <div className={styles.footer}>
            <div className={styles.footer__left}>
              <nav className={styles.footer__column}>
                <p className={styles.footer__title}>Help</p>
                <ul>
                  <li>
                    <a>Поддержка</a>
                  </li>
                  <li>
                    <a>Новости Сайта</a>
                  </li>
                  <li>
                    <a>Правила</a>
                  </li>
                  <li>
                    <a>FAQ</a>
                  </li>
                </ul>
              </nav>
              <nav className={styles.footer__column}>
                <p className={styles.footer__title}>Навигация</p>
                <ul>
                  <li>
                    <a>Subs</a>
                  </li>
                  <li>
                    <a>Liked</a>
                  </li>
                  <li>
                    <a>Poems</a>
                  </li>
                  <li>
                    <a>Novels</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className={styles.footer__center}>
              <img className="w-24" src={logoFoot} />
            </div>
            <div className={styles.footer__right}>
              <nav className={styles.footer__column}>
                <p className={styles.footer__title}>Contacts</p>
                <ul>
                  <li>
                    <a>VK: </a>
                  </li>
                  <li>
                    <a>Inst: </a>
                  </li>
                  <li>
                    <a>TG: </a>
                  </li>
                  <li>
                    <a>Disc: </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className={styles.footerDown}>Copyright © 2022 V&K Labs Inc. Trademark Policy</div>
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;
