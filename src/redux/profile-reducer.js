import {profileAPI} from './../api/api'
const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";



let initialState = {
    posts: [
      { id: 1, message: "React.Js, - a JavaScript library for building user interfaces", likesCount: 12 },
      { id: 2, message: "React makes it painless to create interactive UIs.", likesCount: 14 },
      { id: 3, message: "Build encapsulated components that manage their own state, then compose them to make complex UIs.", likesCount: 2 },
      { id: 4, message: "We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code", likesCount: 5 },
      { id: 5, message: "Have a good day!!!!", likesCount: 12 },
    ],
    profile: null,
    status: '',
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {

    case ADD_POST: {
      let newPost = {
        id: 6,
        message: action.newPostText,
        likesCount: 2,
      };
      return {
        ...state, 
        posts: [...state.posts, newPost],
        newPostText: '',
      }
    } 

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      }

    }

    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      }

    }
    default:
      return state;
  }
};


export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile:profile})
export const setStatus = (status) => ({type:SET_STATUS, status: status })



export const getUserProfile = (userId) => async(dispatch) => {
  let response = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
}


export const getStatus = (userId) => async(dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if(response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
}



export default profileReducer;
