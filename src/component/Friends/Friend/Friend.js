import React from 'react';
import { friend_card } from './Friend.module.scss';
import logo from '../../../assets/logo.png';
import { NavLink } from 'react-router-dom';
import { Card, Row, Col, Button, Popconfirm } from 'antd';
import { GithubOutlined, UserDeleteOutlined, MessageOutlined } from '@ant-design/icons';
const { Meta } = Card;
let Friend = ({ friends, unFollowingInProgress, onUnFollowFriend, isFetchingFriends }) => {
  const handleUnFollowFriend = (id) => {
    onUnFollowFriend(id);
  };
  return (
    <Row justify="center">
      {friends.map((item) => {
        return (
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={8}
            xl={6}
            style={{ display: 'flex', justifyContent: 'space-around' }}
            key={item.id}>
            <Card
              className={friend_card}
              loading={isFetchingFriends}
              hoverable
              size="small"
              style={{
                maxWidth: '200px',
                marginBottom: '2rem',
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'column',
              }}
              cover={
                !isFetchingFriends && (
                  <NavLink to={`/profile/` + item.id}>
                    <img alt="logo" src={item.photos.large !== null ? item.photos.large : logo} />
                  </NavLink>
                )
              }
              actions={[
                <Popconfirm
                  title={`Are you sure to delete ${item.name}?`}
                  onConfirm={() => handleUnFollowFriend(item.id)}
                  okText="Delete"
                  cancelText="No way!">
                  <Button
                    type="dashed"
                    shape="round"
                    disabled={unFollowingInProgress.some((id) => id === item.id)}
                    icon={<UserDeleteOutlined />}></Button>
                </Popconfirm>,
                <NavLink to={`/dialogs/${item.id}`}>
                  <Button type="dashed" shape="round" icon={<MessageOutlined />}></Button>
                </NavLink>,
                <Button type="dashed" shape="round" icon={<GithubOutlined />}></Button>,
              ]}>
              <Meta title={item.name} description={item.status} />
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default Friend;
