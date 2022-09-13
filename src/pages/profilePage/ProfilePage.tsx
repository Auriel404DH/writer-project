import React from 'react';
import styles from './ProfilePage.module.scss';
import ProfileSidebar from '../../components/Profile/ProfileSidebar/ProfileSidebar';
import ProfileFace from '../../components/Profile/ProfileFace/ProfileFace';
import ProfileMenu from '../../components/Profile/ProfileMenu/ProfileMenu';
import ProfileAcheves from '../../components/Profile/ProfileAcheves/ProfileAcheves';
import ProfilePost from '../../components/Profile/ProfilePost/ProfilePost';

const Profile: React.FC = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.profile__title}>Your profile</div>

      <div className={styles.profile__sidebar}>
        <ProfileSidebar />
      </div>

      <div className={styles.profile__info}>
        <div className={styles.profile__info_item}>
          <ProfileMenu />
        </div>
        <div className={styles.profile__info_item}>
          <ProfileFace />
        </div>
        <div className={styles.profile__info_item}>
          <ProfileAcheves />
        </div>
      </div>

      <div className={styles.profile__bottom}>
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
