import { stopSubmit } from 'redux-form';
import {authAPI, securityAPI} from './../api/api'
const SET_USER_DATA = '/AUTH/SET-USER-DATA'
const GET_CAPTCHA_URL_SUCCESS = '/AUTH/GET-CAPTCHA-URL'

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
        return {
            ...state,
            ...action.payload
      };
    }
    case GET_CAPTCHA_URL_SUCCESS: {
      return {
          ...state,
          ...action.payload
    };
  }
    default:
      return state;
  }
};

export const getAuthUserData = () =>  async(dispatch) => {
    let response = await authAPI.me();
    if (response.data.resultCode === 0) {
      let {id, login, email} = response.data.data;
      dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email, password, rememberMe, captcha) => async(dispatch) => {
    const response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData())
    } else {
      if (response.data.resultCode === 10) {
        dispatch(getCaptchaUrl())
      }
      let messages = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
      dispatch(stopSubmit('login', {_error: messages}));
    }
      
}

export const getCaptchaUrl = () => async(dispatch) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl))
  
}

export const logout = () => async(dispatch) => {
  let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false))
    };
}


export const setAuthUserData = (id, email, login, isAuth) => ({type:SET_USER_DATA, payload: {id, email, login, isAuth}})
export const getCaptchaUrlSuccess = (captchaUrl) => ({type:GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}})

export default authReducer;
