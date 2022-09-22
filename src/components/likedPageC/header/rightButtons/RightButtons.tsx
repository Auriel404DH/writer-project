import React from 'react';
import styles from './RightButtons.module.scss';

interface IRightButtons {
  SettingIcon: string;
  DeleteIcon: string;
  ApplyIcon: string;
  toggleShow: () => void;
  returnToChooseAll: any;
}

const RightButtons = ({
  SettingIcon,
  DeleteIcon,
  ApplyIcon,
  toggleShow,
  returnToChooseAll,
}: IRightButtons) => {
  return (
    <div className={styles.header__right}>
      <div className={styles.header__right_icon}>
        <img src={SettingIcon} alt="#" />
      </div>

      <div onClick={returnToChooseAll} className={styles.header__right_icon}>
        <img src={DeleteIcon} alt="#" />
      </div>
      <div onClick={returnToChooseAll} className={styles.header__right_icon}>
        <img src={DeleteIcon} alt="#" />
      </div>
      <div onClick={toggleShow} className={styles.header__right_icon}>
        <img src={ApplyIcon} alt="#" />
      </div>
    </div>
  );
};

export default RightButtons;
