import React from "react";
import styles from "../SettingsPersonal.module.scss";

const PersonalNickname = (props: {nickname: string}) => {
    return (
        <div className={styles.personal__data}>
            <div className={styles.personal__data__name}>
                <div className={styles.personal__data__name__text}>Your nickname: {props.nickname}</div>
                <div className={styles.personal__data__name__change}>
                    <input placeholder="Your new nickname" className={styles.personal__data__name__change__input} type="text" />
                    <button type="button" className={styles.personal__data__name__change__button}>
                        Change nickname
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PersonalNickname;