import React from 'react';
import styles from './ArticleCard.module.scss';
import { Button, Tag } from 'antd';
import { Card } from 'antd';

const { Meta } = Card;

const CardComponent: React.FC = () => {
  const title = <div className="text-main3 text-center">Card title</div>;

  const disc = (
    <div className="text-slate-100">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita ullam, provident,
      distinctio asperiores dicta, quibusdam soluta nesciunt sint alias temporibus officiis atque
      harum aspernatur? Incidunt rerum praesentium assumenda iure quas!
    </div>
  );

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
          <Button className="m-1">Novel</Button>
          <Button className="m-1">Fantastic</Button>
          <Button className="m-1">Ready</Button>
          <Button className="m-1">R</Button>
          <Button className="m-1">Fandom</Button>
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
