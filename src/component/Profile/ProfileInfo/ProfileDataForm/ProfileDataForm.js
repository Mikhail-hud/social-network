import React from 'react';
import {Field, reduxForm } from 'redux-form'
import s from "./ProfileDataForm.module.css";

const ProfileDataForm = ({handleSubmit, goToEditMode, profile, error}) => {
    return (
      <form className={s.profile_form} onSubmit={handleSubmit}>
        <label className={s.profile_form_save}>
             <button onClick={goToEditMode}>Save changes!</button>
        </label>
        {error &&
        <label className={s.error}>
          <p>{error}</p>
        </label>}
        <label>
            <span>Looking for a job: </span> 
            <Field className={s.form_check} type="checkbox" name="lookingForAJob" component={'input'} />
         </label> 
        <label>
             <span>Your full name: </span>
             <Field  placeholder='Type here!' name="fullName" component={'input'} />
        </label>
        <label>
             <span>About You: : </span>
             <Field  placeholder='Type here!' type="textarea" name="aboutMe" component={'input'} />
         </label>
        <label>
             <span>Your skills : </span>
             <Field  placeholder='Type here!' type="textarea" name="lookingForAJobDescription" component={'input'} />
         </label>
        <h3>Contacts:</h3> 
        {Object.keys(profile.contacts).map(key => {
        return (
        <label key={key}>
             <span>{key}</span>
             <Field  placeholder='Type here!' name={`contacts.${key}`} component={'input'} />
        </label>
        )
        })}
    </form>
    )
  }

  const ProfileDataFormReduxForm  = reduxForm({
    form: 'edit-profile',
  })(ProfileDataForm)



  export default ProfileDataFormReduxForm;