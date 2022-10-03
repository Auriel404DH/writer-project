import React from "react";
import styles from "./ProfileFace.module.scss";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Typography } from "antd";

const { Title } = Typography;

const ProfileUser = () => {
  return (
    <div className={styles.face}>
      <div className={styles.flex}>
        <Avatar shape="square" size={128} icon={<UserOutlined />} />
        <div className={styles.face__information}>
          <Title
            style={{
              color: "rgb(148 163 184 / var(--tw-text-opacity))",
              paddingTop: 20,
            }}
            level={3}
          >
            <p className={styles.face__name}>Vadim Chetoshkin </p>
          </Title>
          <div className={styles.face__online}>Online</div>
          <div className={styles.face__new}>
            <div className={styles.face__element}>
              <div className={styles.face__key}> Works: </div>
              <div className={styles.face__value}>1</div>
            </div>
            <div className={styles.face__element}>
              <div className={styles.face__key}>Subs:</div>
              <div className={styles.face__value}>12</div>
            </div>
            <div className={styles.face__element}>
              <div className={styles.face__key}>Comms:</div>
              <div className={styles.face__value}>13</div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.face__content}>
        <div>
          <div className={styles.face__key}> Works: </div>
          <div className={styles.face__value}>1</div>
        </div>
        <div>
          <div className={styles.face__key}>Subs:</div>
          <div className={styles.face__value}>12</div>
        </div>
        <div>
          <div className={styles.face__key}>Comms:</div>
          <div className={styles.face__value}>13</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
