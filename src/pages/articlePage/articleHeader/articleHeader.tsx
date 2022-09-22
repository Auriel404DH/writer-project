import React from "react";
import styles from "./articleHeader.module.scss";

const ArticleHeader = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header__name}>
                How to live?
            </div>
            <div className={styles.header__footer}>
                <div className={styles.header__footer__date}>12.12.2007</div>
                <div className={styles.header__footer__tags}>Here should be tags</div>
                <div className={styles.header__footer__author}>
                    <button type="button" className={styles.header__footer__author__button}>
                        Bogdankov Nikita
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ArticleHeader;