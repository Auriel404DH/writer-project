import { Input } from 'antd';
import styles from './AuthorRecs.module.scss';
import { UserOutlined } from '@ant-design/icons';
import AuthorMini from '../card/authorMini';

interface IAuthorRecs {
  names: string[];
}

const AuthorRecs: React.FC<IAuthorRecs> = ({ names }) => {
  return (
    <div className={styles.recs}>
      <div className={styles.recs__up}>
        <div className={styles.recs__title}>Find Authors</div>
        <div className={styles.recs__inputAuthor}>
          <Input
            bordered={false}
            size="large"
            className={styles.qwe}
            placeholder="Search Author"
            prefix={<UserOutlined />}
          />
        </div>
        <div className={styles.recs__buttons}>
          <div className={styles.recs__findButton}>Find</div>
          <div className={styles.recs__findButton}>Find</div>
          <div className={styles.recs__findButton}>Find</div>
        </div>
      </div>

      <div className={styles.recs__down}>
        <div className={styles.recs__interesting}>
          <div className="mb-1">
            <button className={styles.recs__intButton}>May be interesting</button>
            <div className="overflow-y-scroll h-48 border-t border-main pt-3">
              <AuthorMini name={names[0]} sub={true} />
              <AuthorMini name={names[1]} sub={true} />
              <AuthorMini name={names[0]} sub={true} />
              <AuthorMini name={names[0]} sub={true} />
              <AuthorMini name={names[1]} sub={true} />
              <AuthorMini name={names[0]} sub={true} />
              <AuthorMini name={names[0]} sub={true} />
              <AuthorMini name={names[1]} sub={true} />
              <AuthorMini name={names[0]} sub={true} />
            </div>
          </div>
          <div className={styles.recs__findMore}>Find more...</div>
        </div>
      </div>
    </div>
  );
};

export default AuthorRecs;
