import React, { useState } from 'react';
import {trigger} from './Sidebar.module.scss';
import Navigation from './Navigation/Navigation';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

const style = {
  background: 'none',
  boxShadow: '0 0 10px rgba(0, 0, 0, .2)',
  marginBottom: '24px',
};
const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Sider trigger={null} collapsible collapsed={collapsed} theme="light" style={style}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: trigger,
        onClick: toggle,
      })}
      <Navigation />
    </Sider>
  );
};

export default Sidebar;
