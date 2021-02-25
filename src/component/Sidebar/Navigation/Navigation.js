import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import {
  UserOutlined,
  MessageOutlined,
  TeamOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons';

const navStyle = {
  position: 'sticky',
  top: '11%',
  background: 'none',
  fontSize: '17px',
};
const iconStyle = { fontSize: '17px' };

const navigationLinks = [
  {
    key: 0,
    slug: '/profile',
    icon: <UserOutlined style={iconStyle} />,
    title: 'Profile',
  },
  {
    key: 1,
    slug: '/users',
    icon: <TeamOutlined style={iconStyle} />,
    title: 'Users',
  },
  {
    key: 2,
    slug: '/friends',
    icon: <UsergroupAddOutlined style={iconStyle} />,
    title: 'Friends',
  },
  {
    key: 3,
    slug: '/dialogs',
    icon: <MessageOutlined style={iconStyle} />,
    title: 'Dialogs',
  },
];

const Navigation = () => {
  return (
    <Menu theme="light" mode="inline" defaultSelectedKeys={['0']} style={navStyle}>
      {navigationLinks.map((item) => {
        return (
          <Menu.Item key={item.key} icon={item.icon}>
            <NavLink to={item.slug}>{item.title}</NavLink>
          </Menu.Item>
        );
      })}
    </Menu>
  );
};

export default Navigation;
