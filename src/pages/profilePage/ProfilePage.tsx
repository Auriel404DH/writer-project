import React from 'react';
import styles from './ProfilePage.module.scss';
import ProfileSidebar from './ProfileSidebar/ProfileSidebar';
import ProfileFace from './ProfileFace/ProfileFace';
import ProfileMenu from './ProfileMenu/ProfileMenu';
import ProfileAchieves from './ProfileAchieves/ProfileAchieves';
import ProfilePost from './ProfilePost/ProfilePost';

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
          <ProfileAchieves />
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
