import React from "react";
import styles from "./Article.module.scss";

const Article = (props: {name: string}) => {
  return (
    <div className={styles.article}>
      <div className={styles.article__title}>
        Title. This article is about life, and how it works
      </div>
      <div className={styles.article__description}>
        jghasdhlfdljkgdahjakhdg;ajhjkahjahsjkahjk
        jghasdhlfdljkgdahjakhdg;ajhjkahjahsjkahjk
        jghasdhlfdljkgdahjakhdg;ajhjkahjahsjkahjk
        jghasdhlfdljkgdahjakhdg;ajhjkahjahsjkahjk
        jghasdhlfdljkgdahjakhdg;ajhjkahjahsjkahjk
        jghasdhlfdljkgdahjakhdg;ajhjkahjahsjkahjk
        jghasdhlfdljkgdahjakhdg;ajhjkahjahsjkahjk
        jghasdhlfdljkgdahjakhdg;ajhjkahjahsjkahjk
        jghasdhlfdljkgdahjakhdg;ajhjkahjahsjkahjk
        jghasdhlfdljkgdahjakhdg;ajhjkahjahsjkahjk
        jghasdhlfdljkgdahjakhdg;ajhjkahjahsjkahjk
        jghasdhlfdljkgdahjakhdg;ajhjkahjahsjkahjk
        jghasdhlfdljkgdahjakhdg;ajhjkahjahsjkahjk
        jghasdhlfdljkgdahjakhdg;ajhjkahjahsjkahjk
        jghasdhlfdljkgdahjakhdg;ajhjkahjahsjkahjk
        jghasdhlfdljkgdahjakhdg;ajhjkahjahsjkahjk
        jghasdhlfdljkgdahjakhdg;ajhjkahjahsjkahjk
        jghasdhlfdljkgdahjakhdg;ajhjkahjahsjkahjk
        jghasdhlfdljkgdahjakhdg;ajhjkahjahsjkahjk
        jghasdhlfdljkgdahjakhdg;ajhjkahjahsjkahjk
        jghasdhlfdljkgdahjakhdg;ajhjkahjahsjkahjk
        jghasdhlfdljkgdahjakhdg;ajhjkahjahsjkahjk
        jghasdhlfdljkgdahjakhdg;ajhjkahjahsjkahjk
        jghasdhlfdljkgdahjakhdg;ajhjkahjahsjkahjk
        jghasdhlfdljkgdahjakhdg;ajhjkahjahsjkahjk
        jghasdhlfdljkgdahjakhdg;ajhjkahjahsjkahjk
        jghasdhlfdljkgdahjakhdg;ajhjkahjahsjkahjk
        jghasdhlfdljkgdahjakhdg;ajhjkahjahsjkahjk
        jghasdhlfdljkgdahjakhdg;ajhjkahjahsjkahjk
        jghasdhlfdljkgdahjakhdg;ajhjkahjahsjkahjk
        jghasdhlfdljkgdahjakhdg;ajhjkahjahsjkahjk
        jghasdhlfdljkgdahjakhdg;ajhjkahjahsjkahjk
        jghasdhlfdljkgdahjakhdg;ajhjkahjahsjkahjk
        jghasdhlfdljkgdahjakhdg;ajhjkahjahsjkahjk
        jghasdhlfdljkgdahjakhdg;ajhjkahjahsjkahjk
      </div>
      <div className={styles.article__footer}>
        <div className={styles.article__author}>
          <a href="#"> {props.name} </a>
        </div>
      </div>
    </div>
  );
};

export default Article;