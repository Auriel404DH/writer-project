import React from "react";
import styles from './MainSearch.module.scss';
const MainSearch = () => {
    return (
        <div className={styles.search}>
            <div className={styles.search__title}>Search for the articles</div>
            <input className={styles.search__input} type="text" placeholder="Hi! Type here" />
        </div>
    );
};

export default MainSearch;
