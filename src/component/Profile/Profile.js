import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <>
      <h1>Profile</h1>
      <ProfileInfo  profile={props.profile} status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner} savePhoto={props.savePhoto} saveProfile={props.saveProfile}/>
      <MyPostsContainer />
    </>
  );
};

export default Profile;
