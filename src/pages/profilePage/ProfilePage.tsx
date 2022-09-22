import React from 'react';
import styles from './ProfilePage.module.scss';
import {
  ProfileAchieves,
  ProfileSidebar,
  ProfileMenu,
  ProfileUser,
  ProfilePost,
} from '../../components/profilePageC';

const Profile: React.FC = () => {
  const [sideBarClassName, setSideBarClassName] = React.useState(styles.profile__sidebar);
  const sideBarRef = React.useRef<any>(null);

  const handleScroll = () => {
    const heightToTop = sideBarRef.current?.getBoundingClientRect().top;

    if (heightToTop < 75) {
      setSideBarClassName(styles.profile__sidebar_open);
    } else if (heightToTop > 75) {
      setSideBarClassName(styles.profile__sidebar);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.profile}>
      <div className={styles.profile__title}>Your profile</div>

      <div className={sideBarClassName}>
        <ProfileSidebar />
      </div>

      <div className={styles.profile__info}>
        <div className={styles.profile__info_item}>
          <ProfileMenu />
        </div>
        <div className={styles.profile__info_item}>
          <ProfileUser />
        </div>
        <div className={styles.profile__info_item}>
          <ProfileAchieves />
        </div>
      </div>

      <div ref={sideBarRef} className={styles.profile__bottom}>
        <ProfilePost />
        <ProfilePost />
        <ProfilePost />
        <ProfilePost />
        <ProfilePost />
        <ProfilePost />
      </div>
    </div>
  );
};

export default Profile;
