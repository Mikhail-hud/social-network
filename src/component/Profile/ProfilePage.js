import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';

const Profile = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfile,
  deletePost,
  addLike,
  addPost,
  posts,
  addDislike,
  isAuth,
}) => {
  return (
    <>
      <h1>Profile</h1>
      <ProfileInfo
        isAuth={isAuth}
        profile={profile}
        status={status}
        updateStatus={updateStatus}
        isOwner={isOwner}
        savePhoto={savePhoto}
        saveProfile={saveProfile}
      />
      <MyPosts
        isAuth={isAuth}
        profile={profile}
        deletePost={deletePost}
        addLike={addLike}
        addPost={addPost}
        posts={posts}
        addDislike={addDislike}
      />
    </>
  );
};

export default Profile;
