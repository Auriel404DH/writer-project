import React from "react";
import Language from "./SettingsLanguage/SettingsLanguage";
import styles from "./SettingsPage.module.scss";
import Personal from "./SettingsPersonal/SettingsPersonal";
const Settings = () => {
    return (
        <div className={styles.settings}>
            <div className={styles.settings__title}>Settings</div>
            <Personal />
            <Language lang={false} />
        </div>
    )
}

export default Settings;