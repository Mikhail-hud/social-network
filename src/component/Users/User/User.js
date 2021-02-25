import React from 'react';
import logo from '../../../assets/logo.png';
import { NavLink } from 'react-router-dom';
import { follow_button, user_list } from './User.module.scss';
import { List, Button, Row, Col, Skeleton } from 'antd';
import {
  UserDeleteOutlined,
  MessageOutlined,
  GithubOutlined,
  UserAddOutlined,
} from '@ant-design/icons';

let User = (props) => {
  const { user, followingInProgress, onUnfollow, onFollow, isFetching } = props;
  const handleFollowUnfollow = (followed, id) => {
    if (followed) {
      onUnfollow(id);
    } else {
      onFollow(id);
    }
  };
  return (
    <Row justify="center">
      <Col xs={24} sm={24} md={18} lg={14} xl={12} xxl={10}>
        <List
          className={user_list}
          itemLayout="vertical"
          size="large"
          dataSource={user}
          renderItem={(item) => (
            <List.Item
              key={item.id}
              actions={
                !isFetching && [
                  <Button
                    className={follow_button}
                    onClick={() => handleFollowUnfollow(item.followed, item.id)}
                    disabled={followingInProgress.some((id) => id === item.id)}
                    type="dashed"
                    shape="round"
                    icon={item.followed ? <UserDeleteOutlined /> : <UserAddOutlined />}>
                    {item.followed ? 'Unfollow' : 'Follow'}
                  </Button>,
                  <Button
                    type="dashed"
                    shape="round"
                    disabled={true}
                    icon={<GithubOutlined />}></Button>,
                  <NavLink to={`/dialogs`}>
                    <Button
                      type="dashed"
                      shape="round"
                      disabled={true}
                      icon={<MessageOutlined />}></Button>
                  </NavLink>,
                ]
              }
              extra={
                !isFetching && (
                  <NavLink to={`/profile/` + item.id}>
                    <img
                      width={100}
                      style={{ borderRadius: '50%' }}
                      alt="logo"
                      src={item.photos.small !== null ? item.photos.small : logo}
                    />
                  </NavLink>
                )
              }>
              <Skeleton loading={isFetching} active shape>
                <List.Item.Meta
                  title={<NavLink to={`/profile/` + item.id}>{item.name}</NavLink>}
                  description={item.status}
                />
              </Skeleton>
            </List.Item>
          )}
        />
      </Col>
    </Row>
  );
};

export default User;
