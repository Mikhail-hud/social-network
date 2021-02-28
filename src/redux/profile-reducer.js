import { profileAPI } from './../api/api';
import { stopSubmit } from 'redux-form';
const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS';
const ADD_LIKE = 'ADD-LIKE';
const ADD_DISLIKE = 'ADD-DISLIKE';

let initialState = {
  posts: [
    {
      id: 1,
      message: 'React.Js, - a JavaScript library for building user interfaces',
      likesCount: 1,
      dislikesCount: 10,
    },
    {
      id: 2,
      message: 'React makes it painless to create interactive UIs.',
      likesCount: 6,
      dislikesCount: 20,
    },
    {
      id: 3,
      message:
        'Build encapsulated components that manage their own state, then compose them to make complex UIs.',
      likesCount: 2,
      dislikesCount: 2,
    },
    {
      id: 4,
      message:
        'We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code',
      likesCount: 7,
      dislikesCount: 0,
    },
    { id: 5, message: 'Have a good day!!!!', likesCount: 5, dislikesCount: 4 },
  ],
  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let rand = 10 + Math.random() * (99 + 1 - 10);
      let newPost = {
        id: rand,
        message: action.newPostText,
        likesCount: 0,
        dislikesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: '',
      };
    }

    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((post) => {
          if (post.id !== action.id) {
            return {
              ...post,
            };
          }
          return null;
        }),
      };
    }

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }

    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }

    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };
    }

    case ADD_LIKE: {
      return {
        ...state,
        posts: state.posts.map((item) => {
          if (item.id === action.id && item.dislikesCount > 0) {
            return {
              ...item,
              likesCount: item.likesCount + 1,
              dislikesCount: item.dislikesCount - 1,
            };
          } else if (item.id === action.id) {
            return {
              ...item,
              likesCount: item.likesCount + 1,
            };
          }
          return item;
        }),
      };
    }

    case ADD_DISLIKE: {
      return {
        ...state,
        posts: state.posts.map((item) => {
          if (item.id === action.id && item.likesCount > 0) {
            return {
              ...item,
              dislikesCount: item.dislikesCount + 1,
              likesCount: item.likesCount - 1,
            };
          } else if (item.id === action.id) {
            return {
              ...item,
              dislikesCount: item.dislikesCount + 1,
            };
          }
          return item;
        }),
      };
    }
    default:
      return state;
  }
};

export const addPost = (newPostText) => ({ type: ADD_POST, newPostText });
export const deletePost = (id) => ({ type: DELETE_POST, id });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile: profile });
export const setStatus = (status) => ({ type: SET_STATUS, status: status });
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos: photos });
export const addLike = (id) => ({ type: ADD_LIKE, id });
export const addDislike = (id) => ({ type: ADD_DISLIKE, id });

export const getUserProfile = (userId) => async (dispatch) => {
  const response = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
  const response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
  const response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export const savePhoto = (file) => async (dispatch) => {
  const response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.id;
  const response = await profileAPI.saveProfile(profile);
  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  } else {
    dispatch(stopSubmit('edit-profile', { _error: response.data.messages[0] }));
    console.log(response.data.messages);
    return Promise.reject(response.data.messages[0]);
  }
};

export default profileReducer;
