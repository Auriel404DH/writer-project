import React from "react";
import styles from '../SettingsPersonal.module.scss';

const PersonalSurname = (props: {surname: string}) => {
    return (
        <div className={styles.personal__data}>
            <div className={styles.personal__data__name}>
                    <div className={styles.personal__data__name__text}>Your surname: {props.surname}</div>
                <div className={styles.personal__data__name__change}>
                    <input placeholder="Your new surname" className={styles.personal__data__name__change__input} type="text" />
                    <button type="button" className={styles.personal__data__name__change__button}>
                        Change surname
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PersonalSurname;
