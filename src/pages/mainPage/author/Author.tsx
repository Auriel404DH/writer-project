import React from "react";
import styles from "./Author.module.scss";
import authorPhoto from "../../../assets/author.jpg";

const Author = (props: { name: string; sub: Boolean }) => {
    let text: string;
    if (!props.sub) {
        text = "Subscribe"
    } else {
        text = "Unsubscribe"
    }
  return (
    <div>
      <div className={styles.authors__author}>
        <div>
          <img className={styles.author__photo} src={authorPhoto} alt="" />
        </div>
        <div className={styles.author__name}>{props.name}</div>
        <div className={styles.author__description}>
          ghdasjhgdjlk hasgdjlhgadjkdgs ghdasjhgdjlkh asgdj lhgad jkdgs
          ghdasjhgdj lkhasg djlhga d jkdgs ghdasjhgdjl khasgdjl hgadjkdgs
          ghdasjh gdjlkhasgd jlhgadjkdgs ghdasjhgdjlkh asgdjlhgadjkdgs ghdasjh
          gdjlkhasgd jlhgadjkdgs ghdasjhgdjlkh asgdjlhgadjkdgs ghdasjh
          gdjlkhasgd jlhgadjkdgs ghdasjhgdjlkh asgdjlhgadjkdgs
        </div>
        <div className={styles.author__footer}>
          <button className={styles.author__button} type="button">
            {text}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Author;
