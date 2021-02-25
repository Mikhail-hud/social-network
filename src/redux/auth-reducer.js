
import {authAPI, securityAPI} from './../api/api'
const SET_USER_DATA = '/AUTH/SET-USER-DATA'
const GET_CAPTCHA_URL_SUCCESS = '/AUTH/GET-CAPTCHA-URL'
const SET_NON_FIELD_ERROR = '/AUTH/SET-NON-FIELD-ERROR'

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
  error:null,
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
  case SET_NON_FIELD_ERROR: {
    return {
      ...state,
      ...action.payload
    }
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
      dispatch(setNonFieldError(null))
      dispatch(getCaptchaUrlSuccess(null))
    } else {
      if (response.data.resultCode === 10) {
        dispatch(getCaptchaUrl())
      }
      let messages = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
      dispatch(setNonFieldError(messages));
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
export const setNonFieldError = (error) => ({type:SET_NON_FIELD_ERROR, payload: {error}})

export default authReducer;
