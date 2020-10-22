import React from "react";
import s from "../MyPosts.module.css";
import {maxLengthCreator} from '../../../../units/validators'
import {Textarea} from '../../../../Common/FormsControl/FormsControl'
import {Field, reduxForm, reset} from "redux-form";


const maxLength = maxLengthCreator(100)
const AddNewPostForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <label className={s.myposts_tx}>
          <Field component={Textarea} name='newPostText' validate={maxLength}/>
        </label>
        <label>
          <button className={s.myposts_tx_btn}   type="submit" >  Add post </button>
        </label>
      </form>
    );
  };


const afterSubmit = (result, dispatch) => {
  dispatch(reset('profileAddNewPostForm'));
 }
  
export default reduxForm (
    {form: 'profileAddNewPostForm',
    onSubmitSuccess: afterSubmit,}
  )(AddNewPostForm)