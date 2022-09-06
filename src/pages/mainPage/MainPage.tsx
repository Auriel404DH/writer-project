import React from 'react';
import logo from '../../assets/logo.png';
import './MainPageStyle.css';

const MainPage: React.FC = () => {
  return (
    <>
      <header className="text-2xl flex items-center justify-around border-b-2 py-3">
        <div>
          <img className="w-24" src={logo} alt="" />
        </div>
        <nav className="flex w-5/6 justify-around items-center">
          <a className="link">Главная</a>
          <a className="link">Редактор</a>
          <a className="link">Подписки</a>
          <a className="link">Закладки</a>
          <a className="link">Кабинет</a>
        </nav>
        <div>
          <img className="w-24" src={logo} alt="" />
        </div>
      </header>

      <main>
        <div>Здесь типа текст</div>
      </main>

      <footer>
        <div>Будь как дома, путник!</div>
      </footer>
    </>
  );
};

export default MainPage;
