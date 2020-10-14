import React from "react";
import { Field, reduxForm } from "redux-form";
import {Textarea} from './../../../Common/FormsControl/FormsControl'
import s from "../Dialogs.module.css";
import {maxLengthCreator} from '../../../units/validators'

const maxLength = maxLengthCreator(50)
const AddMessageForm = (props) => {
    return  (
      <form className={s.message} onSubmit={props.handleSubmit}>
        <label className={s.message_tx}>
          <Field className={s.message_tx_in}  component={Textarea} name='newMessageBody' validate={maxLength} />
        </label>
        <label>
          <button className={s.message_tx_btn} type="submit" >Send</button>
        </label>
      </form>
    )
  }
  
  
export default reduxForm(
    {form: 'dialogAddMessageForm'}
  )(AddMessageForm)
