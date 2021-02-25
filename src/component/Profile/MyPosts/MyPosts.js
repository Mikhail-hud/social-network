import React from 'react';
import Posts from './Posts/Posts';
import PostForm from './AddPostForm/PostForm';
import { Row, Col } from 'antd';

const MyPosts = ({ posts, addLike, addPost, deletePost, addDislike, profile, isAuth }) => {
  let postsElements = [...posts]
    .reverse()
    .map((item) => (
      <Posts
        isAuth={isAuth}
        massage={item.message}
        likesCount={item.likesCount}
        dislikesCount={item.dislikesCount}
        key={item.id}
        id={item.id}
        profile={profile}
        addDislike={addDislike}
        addLike={addLike}
        deletePost={deletePost}
      />
    ));

  return (
    <Row>
      <h2>My posts</h2>
      <Col xs={24}>{postsElements}</Col>
      <Col xs={24}>
        <PostForm addPost={addPost} isAuth={isAuth} />
      </Col>
    </Row>
  );
};

export default MyPosts;
