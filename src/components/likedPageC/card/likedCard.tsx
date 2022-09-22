import React from 'react';
import styles from './ArticleCard.module.scss';
import stylesBG from '../../../styles/bg.module.scss';
import cl from 'classnames';
import { Button, Tag } from 'antd';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;

interface IPost {
  genre: string;
  status: string;
  rating: string;
  chapters: number;
  fandom: string;
}

const CardComponent: React.FC<IPost> = ({ genre, status, rating, chapters, fandom }) => {
  const title = <Link to={"/articlePage"} className="text-main3 text-center">Card title</Link>;

  const disc = (
    <Link to={"/articlePage"} className="text-slate-100">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita ullam, provident,
      distinctio asperiores dicta, quibusdam soluta nesciunt sint alias temporibus officiis atque
      harum aspernatur? Incidunt rerum praesentium assumenda iure quas!
    </Link>
  );

  const genreClass = cl({
    [stylesBG.Bg__indigo]: genre === 'Fantasy',
    [stylesBG.Bg__darkRed]: genre === 'Novel',
    [stylesBG.Bg__AnotherRed]: genre === 'Romance',
    [stylesBG.Bg__gray]: genre === 'Detective',
    [stylesBG.Bg__purple]: genre === 'Mistic',
    [stylesBG.Bg__yellow]: genre === 'Historical',
    [stylesBG.Bg__lime]: genre === 'Adventure',
    [stylesBG.Bg__pink]: genre === 'Humor',
    [stylesBG.Bg__white]: genre === 'Friendship',
    [stylesBG.Bg__rose]: genre === 'Drama',
    [stylesBG.Bg__cyan]: genre === 'Angst',
    [stylesBG.Bg__black]: genre === 'Crime',
    [stylesBG.Bg__orange]: genre === 'Family',
  });

  const statusClass = cl({
    [stylesBG.Bg__green]: status === 'Completed',
    [stylesBG.Bg__yellow]: status === 'In process',
    [stylesBG.Bg__AnotherCyan]: status === 'Abandoned',
    [stylesBG.Bg__red]: status === 'Сanceled',
  });

  const chapterClass = cl({
    [stylesBG.Bg__gradient_whiteGray]: chapters > 0 && chapters <= 10,
    [stylesBG.Bg__gradient_grayOrange]: chapters > 10 && chapters <= 20,
    [stylesBG.Bg__gradient_zinkRed]: chapters > 20 && chapters <= 30,
    [stylesBG.Bg__white]: chapters > 30,
  });

  const ratingClass = cl({
    [stylesBG.Bg__purple]: rating === 'G',
    [stylesBG.Bg__lime]: rating === 'PG',
    [stylesBG.Bg__yellow]: rating === 'PG-13',
    [stylesBG.Bg__red]: rating === 'R',
    [stylesBG.Bg__black]: rating === 'NC-17',
  });

  return (
    <Card
      className={styles.card}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
    >
      <Meta className={styles.discription} title={title} description={disc} />
      <div className={styles.buttons}>
        <div className={styles.firstButtons}>
          <Button type="default" className={genreClass}>
            {genre}
          </Button>
          <Button type="default" className={statusClass}>
            {status}
          </Button>
          <Button type="default" className={chapterClass}>
            {chapters}
          </Button>
          <Button type="default" className={ratingClass}>
            {rating}
          </Button>
          <Button type="default" className={stylesBG.Bg__gradient_orangeSky}>
            {fandom}
          </Button>
        </div>
        <div className={styles.tagsContainer}>
          <Tag className={styles.tags} color="default">
            default
          </Tag>
          <Tag className={styles.tags} color="default">
            default
          </Tag>
          <Tag className={styles.tags} color="#e7a007">
            dult
          </Tag>
          <Tag className={styles.tags} color="default">
            default
          </Tag>
          <Tag className={styles.tags} color="default">
            deult
          </Tag>
          <Tag className={styles.tags} color="default">
            default
          </Tag>
          <Tag className={styles.tags} color="default">
            defeeeeault
          </Tag>
          <Tag className={styles.tags} color="#e7a007">
            default
          </Tag>
          <Tag className={styles.tags} color="default">
            deult
          </Tag>
          <Tag className={styles.tags} color="#e7a007">
            default
          </Tag>
          <Tag className={styles.tags} color="default">
            defat
          </Tag>
          <Tag className={styles.tags} color="default">
            delt
          </Tag>
          <Tag className={styles.tags} color="default">
            default
          </Tag>
        </div>

        <div className={styles.authorContainer}>
          <div>Last update: 20.03.2007</div>
          <Button type="text" className={styles.author}>
            Writed by "Name"
          </Button>
        </div>
      </div>
    </Card>
  );
};

// avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}

export default CardComponent;
