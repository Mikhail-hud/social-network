import React, { useState } from 'react';
import { openNotification } from '../../../../Common/helpers';
import { Comment, Tooltip, Avatar } from 'antd';
import logo from '../../../../assets/logo.png';
import moment from 'moment';
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
  DeleteOutlined,
} from '@ant-design/icons';

const Posts = (props) => {
  const {
    massage,
    likesCount,
    dislikesCount,
    deletePost,
    addLike,
    id,
    addDislike,
    profile,
    isAuth,
  } = props;
  const [action, setAction] = useState(null);

  const onDeletePost = () => {
    if (isAuth) {
      deletePost(id);
    } else {
      openNotification();
    }
  };

  const like = () => {
    addLike(id);
    setAction('liked');
  };

  const dislike = () => {
    addDislike(id);
    setAction('disliked');
  };

  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {action === 'liked' ? <LikeFilled /> : <LikeOutlined />}
        <span className="comment-action">{likesCount}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {action === 'disliked' ? <DislikeFilled /> : <DislikeOutlined />}
        <span className="comment-action">{dislikesCount}</span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to">Reply to</span>,
    <span key="comment-basic-reply-to" onClick={onDeletePost}>
      Delete
      <DeleteOutlined />
    </span>,
  ];

  return (
    <Comment
      actions={actions}
      author={profile?.fullName}
      avatar={<Avatar src={profile?.photos?.small ?? logo} alt="photos.small" />}
      content={<p>{massage}</p>}
      datetime={
        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
          <span>{moment().fromNow()}</span>
        </Tooltip>
      }
    />
  );
};

export default Posts;
