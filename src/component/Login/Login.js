import React from 'react'
import {Field, reduxForm } from 'redux-form'
import s from "./login.module.css";
import {Input} from '../../Common/FormsControl/FormsControl'
import {required} from '../../units/validators'
import { connect } from 'react-redux';
import { compose } from 'redux';
import {login} from '../../redux/auth-reducer'
import { Redirect } from 'react-router';


const LoginForm = ({handleSubmit, error}) => {
  
  return (
      <form className={s.main_form} onSubmit={handleSubmit}>
        {error &&
        <label className={s.error}>
          <p>{error}</p>
        </label>}
        <label className={s.form_label}>
          <span>For test use email: free@samuraijs.com</span>
          <Field className={s.form_input} placeholder='Please enter email address.' type="email" name="email" component={Input} validate={required} />
        </label>
        <label className={s.form_label}>
          <span>Password: free</span>
          <Field className={s.form_input} type="password" placeholder='Please enter your password.' name="password" component={Input} validate={required} autoComplete="on"/>
        </label>
        <label className={s.form_label_checkbox}>
          <Field className={s.checkbox} type="checkbox" name="rememberMe" component={Input} />
          <span>Remember me</span>
        </label>
          <button className={s.form_button} onTouchEnd={handleSubmit}  type="submit">Sign In</button>
      </form>
  );
};


const LoginReduxForm  = reduxForm({
  form: 'login',
})(LoginForm)

const Login = (props) => {

  const onSubmit = (formData)=> {
    props.login(formData.email, formData.password, formData.rememberMe)
  }

  if (props.isAuth) {
    return <Redirect to={'/profile'}/>
  }
  return (
    <>
      <h1>Sign In</h1>
      <div className={s.form_container}>
        <LoginReduxForm onSubmit={onSubmit}/>
      </div>
    </>
  );
};

const mapStateToProps = (state)=> {
  return {
    isAuth: state.auth.isAuth
  }
}
export default compose (
  connect(mapStateToProps, {login})
)(Login)
