import React from "react";
import s from "../MyPosts.module.css";
import {maxLengthCreator} from '../../../../units/validators'
import {Textarea} from '../../../../Common/FormsControl/FormsControl'
import {Field, reduxForm } from "redux-form";


const maxLength = maxLengthCreator(100)
const AddNewPostForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <label className={s.myposts_tx}>
          <Field className={s.myposts_tx_in} component={Textarea} name='newPostText' validate={maxLength}/>
        </label>
        <label>
          <button className={s.myposts_tx_btn}   type="submit" >  Add post </button>
        </label>
      </form>
    );
  };
  
export default reduxForm (
    {form: 'profileAddNewPostForm'}
  )(AddNewPostForm)