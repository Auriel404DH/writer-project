import React from "react";
import styles from "./Comment.module.scss";
const Comment = () => {
    return (
        <div className={styles.comment}>
            <div className={styles.comment__header}>
                <img className={styles.image} src="https://politeh.vbglenobl.ru/sites/default/files/default_images/manager-male.jpg" alt="avatar" />
                <div className={styles.name}>Bogdankov Nikita</div>
            </div>
            <div className={styles.comment__text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, debitis. Similique officia ullam consectetur fuga quas perferendis 
                voluptatibus itaque obcaecati repellat, eius illum voluptas, esse qui labore adipisci autem hic. Lorem, ipsum dolor sit amet consectetur
                 adipisicing elit. Tenetur rem, ab doloribus quidem sequi molestias facilis adipisci est culpa dolore obcaecati repellendus qui nesciunt 
                 ipsam architecto deserunt! Odio, dolorum voluptates?
            </div>
        </div>
    )
}

export default Comment;