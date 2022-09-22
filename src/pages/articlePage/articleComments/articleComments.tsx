import React from "react";
import styles from "./articleComments.module.scss";
import Comment from "./Comment/Comment";

const ArticleComments = () => {
    return (
        <div className={styles.comments}>
            <div className={styles.title}>Comments:</div>
            <div className={styles.textarea}>
                <textarea placeholder="Write your comment here" name=""></textarea>
                <button className={styles.button} type="button">Send your comment</button>
            </div>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
        </div>
    )
}

export default ArticleComments;