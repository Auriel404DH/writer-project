import React from 'react';
import Author from '../mainPage/author/Author';
import styles from './SubscriptionPage.module.scss';

const Subscription: React.FC = () => {
    const name = ["Bogdankov Nikita", "Vadim Chetoshnikov"];
    return (
        <div className={styles.subscription}>
            <div className={styles.subscription__title}> Authors you've subscribed</div>
            <div className={styles.subscription__authors}>
                <Author name={name[0]} sub={true} />
                <Author name={name[0]} sub={true} />
                <Author name={name[1]} sub={true}  />
                <Author name={name[0]} sub={true}  />
                <Author name={name[1]} sub={true}  />
            </div>
        </div>
    );
  };
  
  export default Subscription