import React from "react";
import s from "./ProfileInfo.module.css";
import logo_main from "./logo-main.png";
import Preloder from '../../../Common/Preloder/Preloader'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {


  if(!props.profile) {
    return <Preloder/>
  }
  return (
    <section className={s.profile}>
      <aside className={s.profile_card}>
        <div className={s.profile_card_avatar}>
          <img src={props.profile.photos.large !==null ? props.profile.photos.large: logo_main } alt='avatar' />
        </div>
        <h2>{props.profile.fullName}</h2>
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        <div className={s.profile_container}>
          <p>{props.profile.aboutMe}</p>
          <p>{props.profile.lookingForAJobDescription}</p>
          <p>{props.profile.contacts.facebook}</p>
          <p>{props.profile.contacts.vk}</p>
          <p>{props.profile.contacts.github}</p>
        </div>
      </aside>
    </section>
  );
};

export default ProfileInfo;
