import React from "react";
import styles from './SettingsLanguage.module.scss';

const Language = (props: {lang: boolean}) => {
    let language:string;
    if (props.lang) language = "RUS";
    else language = "ENG";
    return (
        <div className={styles.language}>
            <div className={styles.language__title}>
                Language Settings
            </div>
            <div className={styles.language__choose}>
                <div className={styles.language__choose__text}>
                    Choose your language
                </div>
                <button type="button" className={styles.language__choose__button}>
                    {language}
                </button>
            </div>
        </div>
    )
}

export default Language;