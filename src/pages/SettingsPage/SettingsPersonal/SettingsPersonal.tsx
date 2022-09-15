import React from "react";
import styles from './SettingsPersonal.module.scss';
import PersonalChoose from "./SettingsPersonalData/SettingsPersonalDataChoose";
import PersonalName from "./SettingsPersonalData/SettingsPersonalDataName";
import PersonalNickname from "./SettingsPersonalData/SettingsPersonalDataNickname";
import PersonalSurname from "./SettingsPersonalData/SettingsPersonalDataSurname";

const Personal = () => {
    const PersonalData = {
        name: "Nikita",
        surname: "Bogdankov",
        nickname: "nikitave",
        doesWant: false,
    }
    return (
        <div className={styles.personal}>
            <div className={styles.personal__title}>
                Your personal data
            </div>
            <PersonalName name={PersonalData.name} />
            <PersonalSurname surname={PersonalData.surname}/>
            <PersonalNickname nickname={PersonalData.nickname} />
            <PersonalChoose doesWant={PersonalData.doesWant} />
        </div>
    )
}

export default Personal;