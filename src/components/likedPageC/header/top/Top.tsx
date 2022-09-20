import React from 'react';
import cl from 'classnames';
import styles from './Top.module.scss';
import Input from 'antd/lib/input/Input';

interface ITop {
  show: boolean;
  ShowIcon: string;
  toggleShow: () => void;
}

const Top = ({ show, ShowIcon, toggleShow }: ITop) => {
  return (
    <div className={styles.header__top}>
      <div className={styles.header__preview}>
        <div className={styles.header__left_item}>Favorite Post: Forest</div>
        <Input bordered={false} placeholder="Find here..." className={styles.qwe} />
      </div>
      <div>
        <div
          onClick={toggleShow}
          className={cl({ [styles.header__right_icon]: true, [styles.header__rotate]: !show })}
        >
          <img src={ShowIcon} alt="#" />
        </div>
      </div>
    </div>
  );
};

export default Top;
