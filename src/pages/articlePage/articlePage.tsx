import React from "react";
import styles from "./articlePage.module.scss";
import ArticleHeader from "./articleHeader/articleHeader";
import ArticleMain from "./articleMain/articleMain";
import ArticleComments from "./articleComments/articleComments";
const ArticlePage = () => {
    return (
        <div className={styles.article}>
            <ArticleHeader />
            <ArticleMain />
            <ArticleComments />
        </div>
    )
}

export default ArticlePage;

