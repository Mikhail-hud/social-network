import React, { useState } from 'react';
import { dialogList } from './DialogsUsers.module.scss';
import { NavLink } from 'react-router-dom';
import { List, Avatar, Drawer, Button } from 'antd';
import { CommentOutlined } from '@ant-design/icons';

const DialogItem = (props) => {
  const { dialogs } = props;
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <Button type="primary" shape="round" icon={<CommentOutlined />} onClick={showDrawer} />
      <Drawer
        className={dialogList}
        title="Dialogs"
        placement="left"
        closable={false}
        onClose={onClose}
        width={300}
        visible={visible}>
        <List
          itemLayout="horizontal"
          dataSource={dialogs}
          renderItem={(item) => (
            <List.Item onClick={onClose}>
              <NavLink to={`/dialogs/${item.id}`}>
                <List.Item.Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title={item.name}
                />
              </NavLink>
            </List.Item>
          )}
        />
      </Drawer>
    </>
  );
};

export default DialogItem;
