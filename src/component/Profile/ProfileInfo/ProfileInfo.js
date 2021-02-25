import React, { useState } from 'react';
import s, { profile } from './ProfileInfo.module.scss';
import logo from '../../../assets/logo.png';
import Preloder from '../../../Common/Preloder/Preloader';
import ProfileStatus from './ProfileStatus';
import ProfileDataForm from '../ProfileInfo/ProfileDataForm/ProfileDataForm';
import { Row, Col, Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';

const ProfileInfo = (props) => {
  let [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <Preloder />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    props.saveProfile(formData);
    setEditMode(false);
  };
  return (
    <>
      <Row className={profile}>
        <Col style={{ position: 'absolute', top: '22px', right: '20px' }}>
          {props.isOwner && (
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
          <img src={props.profile.photos.large ?? logo} alt="avatar" />
          {props.isOwner && (
            <label className={s.label}>
              <i className="material-icons">add_a_photo</i>
              <input type="file" onChange={onMainPhotoSelected} />
            </label>
          )}
        </Col>
        <Col>
          <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
        </Col>
      </Row>
      <Row>
        <Col xs={24}>
          {editMode ? (
            <ProfileDataForm
              initialValues={props.profile}
              onSubmit={onSubmit}
              profile={props.profile}
            />
          ) : (
            <ProfileData profile={props.profile} isOwner={props.isOwner} />
          )}
        </Col>
      </Row>
    </>
  );
};

const ProfileData = (props) => {
  return (
    <div className={s.profile_container}>
      <h2>{props.profile.fullName}</h2>
      <p className={props.profile.aboutMe ? '' : `${s.none}`}>
        <b>About me:</b> {props.profile.aboutMe}
      </p>
      <p>
        <b>Looking for a job:</b> {props.profile.lookingForAJob ? 'Yes!' : 'No !'}
      </p>
      {props.profile.lookingForAJob && (
        <p>
          <b>My skills:</b> {props.profile.lookingForAJobDescription}
        </p>
      )}
      {Object.keys(props.profile.contacts).map((key) => {
        return <Contact contactTitle={key} key={key} contactValue={props.profile.contacts[key]} />;
      })}
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <>
      <a className={s.contacts_link} href={contactValue}>
        <p className={contactValue ? '' : `${s.none}`}>
          <b>{contactTitle}:</b> {contactValue}
        </p>
      </a>
    </>
  );
};

export default ProfileInfo;
