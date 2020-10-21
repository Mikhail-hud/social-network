import React, {useState} from "react";
import s from "./ProfileInfo.module.css";
import logo_main from "./logo-main.png";
import Preloder from '../../../Common/Preloder/Preloader'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from '../ProfileInfo/ProfileDataForm/ProfileDataForm'

const ProfileInfo = (props) => {


  let [editMode, setEditMode] = useState(false);

  if(!props.profile) {
    return <Preloder/>
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
    
  }

  const onSubmit = (formData)=> {
   props.saveProfile(formData).then( ()=> {
    setEditMode(false)
   });
    
  }
  return (
    <section className={s.profile}>
      <aside className={s.profile_card}>
        <div className={s.profile_card_avatar}>
          <img src={props.profile.photos.large || logo_main } alt='avatar' />
          {props.isOwner &&
          <label className={s.custom_file_upload}>
            <input onChange={onMainPhotoSelected} type="file"/>
             <i>Click to update photo!</i> 
          </label>}
          <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>
        {editMode ? 
        <ProfileDataForm initialValues={props.profile} onSubmit={onSubmit} profile={props.profile}/> : 
        <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={()=> {setEditMode(true)}}/>}
      </aside>
    </section>
  );
};


const ProfileData = (props) => {
  return (
    <div className={s.profile_container}>
      {props.isOwner && <div><button onClick={props.goToEditMode}> Edit profile!</button></div>}
      <h2>{props.profile.fullName}</h2>
      <p className={props.profile.aboutMe ? '': `${s.none}`}>About me: {props.profile.aboutMe}</p>
      <p>Looking for a job: {props.profile.lookingForAJob ? 'Yes!': 'No !'}</p>
      {props.profile.lookingForAJob && <p>My skills: {props.profile.lookingForAJobDescription}</p> }
      <h3>Contacts:</h3>
      {Object.keys(props.profile.contacts).map(key => {
      return <Contact contactTitle={key} key={key} contactValue={props.profile.contacts[key]}/>
      })}
  </div>
  )
}

const Contact = ({contactTitle, contactValue}) => {
  return  (
    <>
      <p className={contactValue ? '': `${s.none}`}>{contactTitle}: {contactValue}</p>
    </>
  )
}

export default ProfileInfo;
