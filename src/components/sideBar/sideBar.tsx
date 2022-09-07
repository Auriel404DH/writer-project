import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React, { useState } from 'react';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('News', 'sub1', <MailOutlined />, [
    getItem('Friends', '1'),
    getItem('Groups', '2'),
    getItem('Publics', '3'),
    getItem('HateList', '4'),
  ]),

  getItem('Apps', 'sub2', <AppstoreOutlined />, [
    getItem('Writer', '5'),
    getItem('Publisher', '6'),
    getItem('Bookmarks', 'sub3', null, [getItem('Harry Potter', '7'), getItem('Soul Life', '8')]),
  ]),

  getItem('Settings', 'sub4', <SettingOutlined />, [
    getItem('Theme', '9'),
    getItem('Privacy', '10'),
    getItem('Language', '11'),
    getItem('Edit Profile', '12'),
  ]),
];

const SideList: React.FC = () => {
  const [current, setCurrent] = useState('1');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <>
      <Menu
        theme={'dark'}
        onClick={onClick}
        style={{ width: 200 }}
        defaultOpenKeys={['sub1']}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
    </>
  );
};

export default SideList;
