import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import {
  getUserProfile,
  getStatus,
  updateStatus,
  savePhoto,
  addPost,
  addLike,
  deletePost,
  addDislike,
} from '../../redux/profile-reducer';
import Profile from './ProfilePage';
import { useSelector, useDispatch } from 'react-redux';

const ProfileContainer = (props) => {
  const dispatch = useDispatch();
  const profile = useSelector(({ profilePage }) => profilePage.profile);
  const status = useSelector(({ profilePage }) => profilePage.status);
  const authorizedUserId = useSelector(({ auth }) => auth.id);
  const posts = useSelector(({ profilePage }) => profilePage.posts);
  const isAuth = useSelector(({ auth }) => auth.isAuth);

  const onAddPost = (newPostText) => {
    dispatch(addPost(newPostText));
  };

  const onAddLike = (id) => {
    dispatch(addLike(id));
  };

  const onAddDislike = (id) => {
    dispatch(addDislike(id));
  };

  const onDeletePost = (id) => {
    dispatch(deletePost(id));
  };

  const onSavePhoto = (photo) => {
    dispatch(savePhoto(photo));
  };

  const onUpdateStatus = (status) => {
    dispatch(updateStatus(status));
  };

  let userId = props.match.params.userId ?? authorizedUserId ?? props.history.push('/login');

  useEffect(() => {
    dispatch(getUserProfile(userId));
    dispatch(getStatus(userId));
  }, [dispatch, userId]);

  return (
    <>
      <Profile
        isAuth={isAuth}
        addDislike={onAddDislike}
        addPost={onAddPost}
        addLike={onAddLike}
        deletePost={onDeletePost}
        profile={profile}
        status={status}
        posts={posts}
        updateStatus={onUpdateStatus}
        isOwner={!props.match.params.userId}
        savePhoto={onSavePhoto}
      />
    </>
  );
};

export default withRouter(ProfileContainer);

