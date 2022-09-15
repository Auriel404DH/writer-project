import React from "react";
import styles from "../SettingsPersonal.module.scss";

const PersonalName = (props: { name: string }) => {
    return (
        <div className={styles.personal__data}>
            <div className={styles.personal__data__name}>
                <div className={styles.personal__data__name__text}>Your name: {props.name}</div>
                <div className={styles.personal__data__name__change}>
                    <input placeholder="Your new name" className={styles.personal__data__name__change__input} type="text" />
                    <button type="button" className={styles.personal__data__name__change__button}>
                        Change name
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PersonalName;