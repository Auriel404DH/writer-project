import React from 'react';
import ChooseParams from './chooseParams/ChooseParams';
import { DeleteIcon, ApplyIcon, SettingIcon, ShowIcon } from '../../../assets/Icons';
import stylesBG from '../../../styles/bg.module.scss';
import styles from './LikedHeader.module.scss';
import cl from 'classnames';
import OtherInfo from './otherInfo/OtherInfo';
import RightButtons from './rightButtons/RightButtons';
import Top from './top/Top';
import AcceptedParamsList from './acceptedParams/AcceptedParamsList';

interface ILikedHeader {
  genres: string[];
  status: string[];
  sort: string[];
  rating: string[];
  favorite: string;
  likedPage: boolean;
}

const LikedHeader = ({ genres, status, sort, rating, favorite, likedPage }: ILikedHeader) => {
  const [show, setShow] = React.useState<boolean>(true);
  const [AcceptedParams, setAcceptedParams] = React.useState<string[]>([]);

  const chooseAll = (i: string) => {
    return cl({
      [stylesBG.Bg__green2]: i === 'Completed',
      [stylesBG.Bg__yellow3]: i === 'In Process',
      [stylesBG.Bg__AnotherCyan]: i === 'Abandoned',
      [stylesBG.Bg__red2]: i === 'Canceled',
      [stylesBG.Bg__blue2]: i === 'By name',
      [stylesBG.Bg__purple2]: i === 'By count',
      [stylesBG.Bg__yellow2]: i === 'By likes',
      [stylesBG.Bg__red]: i === 'By my list',
      [stylesBG.Bg__white2]: i === 'By genre',
      [stylesBG.Bg__amber]: i === 'By rating',
      [stylesBG.Bg__green]: i === 'By status',
      [stylesBG.Bg__purple3]: i === 'G',
      [stylesBG.Bg__lime3]: i === 'PG',
      [stylesBG.Bg__yellow4]: i === 'PG-13',
      [stylesBG.Bg__red]: i === 'R',
      [stylesBG.Bg__black]: i === 'NC-17',
      [stylesBG.Bg__indigo]: i === 'Fantasy',
      [stylesBG.Bg__darkRed]: i === 'Novel',
      [stylesBG.Bg__AnotherRed]: i === 'Romance',
      [stylesBG.Bg__gray]: i === 'Detective',
      [stylesBG.Bg__purple]: i === 'Mistic',
      [stylesBG.Bg__yellow]: i === 'Historical',
      [stylesBG.Bg__lime]: i === 'Adventure',
      [stylesBG.Bg__pink]: i === 'Humor',
      [stylesBG.Bg__white]: i === 'Friendship',
      [stylesBG.Bg__rose]: i === 'Drama',
      [stylesBG.Bg__cyan]: i === 'Angst',
      [stylesBG.Bg__black2]: i === 'Crime',
      [stylesBG.Bg__orange]: i === 'Family',
    });
  };

  const toggleShow = () => setShow(!show);

  const addToAccepted = (i: string) => {
    if (!AcceptedParams.includes(i)) {
      setAcceptedParams((prew) => [...prew, i]);
    }
  };

  const returnToChooseAll = () => {
    setAcceptedParams([]);
  };

  return (
    <div className={cl({ [styles.header]: true, [styles.header__closed]: show })}>
      <Top
        isLikedPage={likedPage}
        favorite={favorite}
        show={show}
        toggleShow={toggleShow}
        ShowIcon={ShowIcon}
      />
      <div className="flex">
        <OtherInfo isLikedPage={likedPage} />
        <div className={styles.header__center}>
          <div className={styles.header__center_left}>
            <div className={styles.header__firstItem}>Choose Params</div>
            <div>
              <ChooseParams
                addToAccepted={addToAccepted}
                content={genres}
                acceptedParams={AcceptedParams}
                stylesContent={chooseAll}
              />
              <ChooseParams
                addToAccepted={addToAccepted}
                content={sort}
                acceptedParams={AcceptedParams}
                stylesContent={chooseAll}
              />
              <ChooseParams
                addToAccepted={addToAccepted}
                content={status}
                acceptedParams={AcceptedParams}
                stylesContent={chooseAll}
              />
              <ChooseParams
                addToAccepted={addToAccepted}
                content={rating}
                acceptedParams={AcceptedParams}
                stylesContent={chooseAll}
              />
            </div>
          </div>
          <div className={styles.header__center_right}>
            <div className={styles.header__firstItem}>Accepted params</div>
            <AcceptedParamsList
              setAcceptedParams={setAcceptedParams}
              chooseStyle={chooseAll}
              acceptedParams={AcceptedParams}
            />
          </div>
        </div>
        <RightButtons
          returnToChooseAll={returnToChooseAll}
          SettingIcon={SettingIcon}
          ApplyIcon={ApplyIcon}
          DeleteIcon={DeleteIcon}
          toggleShow={toggleShow}
        />
      </div>
    </div>
  );
};

export default LikedHeader;
