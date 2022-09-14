import Author from '../../sharedComponents/AuthorComponent/AuthorCard/AuthorCard';
import styles from './Main.module.scss';
import 'antd/dist/antd.min.css';
import CardComponent from '../../sharedComponents/ArticleComponent/ArticleCard/ArticleCard';
import Selector from '../../sharedComponents/selectorComponent/selector';
import MainSearch from './MainSearch/MainSearch';

const MainPage = () => {
  const name = ['Bogdankov Nikita', 'Vadim Chetoshnikov'];
  return (
    <div className={styles.main}>
      <div className={styles.articles}>
        <h1 className={styles.title}>Articles you might like</h1>

        <div className={styles.articles__tags}>
          <Selector tag1={'Romantic'} tag2={'Horror'} tag3={'Fantastic'} tag4={'Novel'} />
          <Selector tag1={'By Name'} tag2={'By popular'} tag3={'By likes'} tag4={'By my list'} />
          <Selector tag1={'1 month'} tag2={'2 weeks'} tag3={'week'} tag4={'3 days'} />
          <Selector tag1={'A'} tag2={'B'} tag3={'S'} tag4={'R'} />
        </div>

        <div className={styles.block__articles}>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </div>
        <MainSearch />

      </div>

      <div className={styles.authors}>
        <div className={styles.title}>Authors you might like</div>
        <div className={styles.articles__tags}>
          <Selector tag1={'Romantic'} tag2={'Horror'} tag3={'Fantastic'} tag4={'Novel'} />
          <Selector tag1={'By Name'} tag2={'By popular'} tag3={'By likes'} tag4={'By my list'} />
          <Selector tag1={'1 month'} tag2={'2 weeks'} tag3={'week'} tag4={'3 days'} />
          <Selector tag1={'A'} tag2={'B'} tag3={'S'} tag4={'R'} />
        </div>
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
