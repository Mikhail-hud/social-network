import React from 'react';
import LoginForm from './LoginForm';
import {useSelector, useDispatch} from 'react-redux';
import {login, setNonFieldError} from '../../redux/auth-reducer';
import {Redirect} from 'react-router';

const LoginContainer = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(({auth}) => auth.isAuth);
  const captchaUrl = useSelector(({auth}) => auth.captchaUrl);
  const error = useSelector(({auth}) => auth.error);

  const onLogin = (email, password, rememberMe, captcha) => {
    dispatch(login(email, password, rememberMe, captcha));
  };

  const clearError = (error) => {
    dispatch(setNonFieldError(error));
  }


  if (isAuth) {
    return <Redirect to={'/profile'}/>;
  }

  return (
    <LoginForm
      isAuth={isAuth}
      captchaUrl={captchaUrl}
      onLogin={onLogin}
      error={error}
      clearError={clearError}
    />
  );
};

export default LoginContainer;
