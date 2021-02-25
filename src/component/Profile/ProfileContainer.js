import React, { useEffect} from 'react';
import { withRouter } from 'react-router';
import {
  getUserProfile,
  getStatus,
  updateStatus,
  savePhoto,
  saveProfile,
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

  const onSaveProfile = (formData) => {
    dispatch(saveProfile(formData));
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
        saveProfile={onSaveProfile}
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

// import React from "react";
// import { connect } from "react-redux";
// import { withRouter} from "react-router";
// import {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile} from "../../redux/profile-reducer";
// import Profile from "./Profile";
// import { compose } from "redux";

// class ProfileContainer extends React.Component {

//   refreshProfile () {
//     let userId = this.props.match.params.userId;
//     if (!userId) {
//       userId = this.props.authorizedUserId;
//       if(!userId) {
//         this.props.history.push('/login')
//       }
//     }
//     this.props.getUserProfile(userId);
//     this.props.getStatus(userId);

//   }

//   componentDidMount () {
//     this.refreshProfile();
//   }

//   componentDidUpdate (prevProps, prevState) {
//     if(this.props.match.params.userId !== prevProps.match.params.userId) {
//       this.refreshProfile();
//     }

//   }
//   render() {
//     return (
//       <>
//         <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} isOwner={!this.props.match.params.userId} savePhoto={this.props.savePhoto}/>
//       </>
//     );
//   }
// }

// let mapStateToProps = (state) => {
//   return {
//    profile: state.profilePage.profile,
//    status: state.profilePage.status,
//    authorizedUserId: state.auth.id,
//    isAuth: state.auth.isAuth
//   }
//  };

// export default compose (
//   connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
//   withRouter,
// ) (ProfileContainer)
