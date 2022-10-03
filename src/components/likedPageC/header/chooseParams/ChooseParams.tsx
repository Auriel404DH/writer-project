import React from 'react';
import styles from './SortList.module.scss';
import cl from 'classnames';

interface ILikerHeaderSort {
  content: string[];
  stylesContent: (i: string) => any;
  addToAccepted: (i: string) => void;
  acceptedParams: string[];
}

const LikerHeaderSort: React.FC<ILikerHeaderSort> = ({
  content,
  stylesContent,
  addToAccepted,
  acceptedParams,
}) => {
  const onClickParam = (i: string) => {
    addToAccepted(i);
    content.filter((elem) => elem !== i);
  };

  return (
    <div className={styles.sortList}>
      <div className={styles.sortList__content}>
        {!content.every((i) => acceptedParams.includes(i)) ? (
          content.map((i) => (
            <div
              key={i}
              onClick={() => onClickParam(i)}
              className={cl({
                [stylesContent(i)]: true,
                [styles.chosen]: acceptedParams.includes(i),
              })}
            >
              {i}
            </div>
          ))
        ) : (
          <div>That's all</div>
        )}
      </div>
    </div>
  );
};

export default LikerHeaderSort;
