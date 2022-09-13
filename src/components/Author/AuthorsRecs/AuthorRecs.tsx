import { Input } from 'antd';
import styles from './AuthorRecs.module.scss';
import { UserOutlined } from '@ant-design/icons';
import AuthorMini from '../AuthorCard/AuthorMini';

interface IAuthorRecs {
  names: string[];
}

const AuthorRecs: React.FC<IAuthorRecs> = ({ names }) => {
  return (
    <div className={styles.recs}>
      <Input size="large" placeholder="Search Author ..." prefix={<UserOutlined />} />
      <div>
        <div className={styles.recs__buttons}>
          <button className={styles.recs__button}>Friends</button>
          <button className={styles.recs__button}>Resents</button>
          <button className={styles.recs__button}>Delete</button>
        </div>
        <div className={styles.recs__intresting}>
          <div className="mb-1">
            <button className={styles.recs__intButton}>May be intresting.</button>
            <AuthorMini name={names[0]} sub={true} />
            <AuthorMini name={names[1]} sub={true} />
            <AuthorMini name={names[0]} sub={true} />
            <AuthorMini name={names[1]} sub={true} />
          </div>
          <div className={styles.recs__findMore}>Find more ...</div>
        </div>
      </div>
    </div>
  );
};

export default AuthorRecs;
