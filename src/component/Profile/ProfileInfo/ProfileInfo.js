import React, { useState } from 'react';
import { profile_card, profile_data } from './ProfileInfo.module.scss';
import logo from '../../../assets/logo.png';
import github from '../../../assets/github.svg';
import facebook from '../../../assets/facebook.svg';
import vk from '../../../assets/vk.svg';
import mainLink from '../../../assets/mainLink.svg';
import youtube from '../../../assets/youtube.svg';
import instagram from '../../../assets/instagram.svg';
import twitter from '../../../assets/twitter.svg';
import website from '../../../assets/website.svg';
import updateLogo from '../../../assets/updateLogo.svg';
import Preloder from '../../../Common/Preloder/Preloader';
import ProfileStatus from './ProfileStatus';
import ProfileDataForm from '../ProfileInfo/ProfileDataForm/ProfileDataForm';
import { Row, Col, Button, Tooltip } from 'antd';
import { EditOutlined } from '@ant-design/icons';

const ProfileInfo = ({ profile, savePhoto, saveProfile, isOwner, status, updateStatus }) => {
  let [editMode, setEditMode] = useState(false);
  if (!profile) {
    return <Preloder />;
  }
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };
  // const onSubmit = (formData) => {
  //   saveProfile(formData);
  //   setEditMode(false);
  // };
  return (
    <>
      <Row className={profile_card}>
        <Col style={{ position: 'absolute', top: '18px', right: '20px' }}>
          {isOwner && (
            <Button
              type="primary"
              shape="round"
              icon={<EditOutlined />}
              onClick={() => {
                setEditMode(true);
              }}>
              Edit profile!
            </Button>
          )}
        </Col>
        <Col>
          <img src={profile.photos.large ?? logo} alt="avatar" />
          {isOwner && (
            <Tooltip title={'Upload your photo!'}>
              <label>
                <img src={updateLogo} alt="update-logo"></img>
                <input type="file" onChange={onMainPhotoSelected} />
              </label>
            </Tooltip>
          )}
        </Col>
        <Col>
          <ProfileStatus status={status} updateStatus={updateStatus} isOwner={isOwner} />
        </Col>
      </Row>
      <Row>
        <ProfileDataForm
          initialValues={profile}
          editMode={editMode}
          setEditMode={setEditMode}
          saveProfile={saveProfile}
          profile={profile}
        />
        <ProfileDetails profile={profile} isOwner={isOwner} />
      </Row>
    </>
  );
};

const ProfileDetails = ({ profile }) => {
  const { fullName, aboutMe, lookingForAJob, lookingForAJobDescription, contacts } = profile;
  const icon = {
    github,
    facebook,
    vk,
    mainLink,
    youtube,
    instagram,
    twitter,
    website,
  };

  return (
    <Col xs={24} className={profile_data}>
      <h2>{fullName}</h2>
      {aboutMe && (
        <p>
          <b>About me:</b> {aboutMe}
        </p>
      )}
      <p>
        <b>Looking for a job:</b> {lookingForAJob ? 'Yes!' : 'No !'}
      </p>
      {lookingForAJob && (
        <p>
          <b>My skills:</b> {lookingForAJobDescription}
        </p>
      )}
      {Object.entries(contacts).map(([key, item]) => {
        if (item)
          return (
            <a href={item} key={key}>
              <img src={icon[key]} alt="social-icon"></img>
            </a>
          );
        return null;
      })}
    </Col>
  );
};

export default ProfileInfo;
