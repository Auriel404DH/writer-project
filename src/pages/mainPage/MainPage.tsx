import Author from '../../components/AuthorCard/Author';
import Article from './article/Article';
import styles from './Main.module.scss';
import { Divider } from 'antd';
import 'antd/dist/antd.min.css';

const MainPage = () => {
  const name = ['Bogdankov Nikita', 'Vadim Chetoshnikov'];
  return (
    <div className={styles.main}>
      <div className={styles.articles}>
        <Divider>Text</Divider>
        {/* <h1 className={styles.title}>Articles you might like</h1> */}
        <div className={styles.block__articles}>
          <Article name={name[0]} />
          <Article name={name[1]} />
          <Article name={name[0]} />
        </div>
      </div>

      <div className={styles.authors}>
        <div className={styles.title}>Authors you might like</div>

        <div className={styles.authors__authors}>
          <Author name={name[0]} sub={false} />
          <Author name={name[1]} sub={true} />
          <Author name={name[1]} sub={false} />
          <Author name={name[0]} sub={true} />
          <Author name={name[1]} sub={false} />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
