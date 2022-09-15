import React, { useState } from "react";
import styles from '../SettingsPersonal.module.scss';

const PersonalChoose = (props: {doesWant: boolean}) => {
    let answer = "Yes";
    if (!props.doesWant) answer = "No"; 

    return (
        <div className={styles.personal__choose}>
            <div className={styles.personal__choose__text}>
                Do you want other people to see your name and surname
            </div>
            <div>
                <button className={styles.personal__choose__button} type="button"> 
                    {answer} 
                </button>
            </div>
        </div>
    )
}

export default PersonalChoose;