import {usersAPI} from '../api/api'
const SET_FRIENDS = "SET-FRIENDS";
const SET_CURRENT_PAGE_FRIENDS = "SET-CURRENT-PAGE-FRIENDS";
const SET_TOTAL_FRIENDS_COUNT = 'SET-TOTAL-FRIENDS-COUNT'
const TOGGLE_IS_FETCHING_FRIENDS = 'TOGGLE-IS-FETCHING-FRIENDS'
const TOGGLE_IS_REMOVING_PROGRESS = 'TOGGLE-IS-REMOVING-PROGRESS'
const CLEAR_IN_FOLLOWING_PROGRESS = 'CLEAR_IN_FOLLOWING_PROGRESS'

let initialState = {
  friends: [],
  pageSizeFriends: 5,
  totalFriendsCount: 0,
  currentPageFriends: 1,
  isFetchingFriends: false,
  unFollowingInProgress: [],
};

const  friendReducer= (state = initialState, action) => {
  switch (action.type) {
    case SET_FRIENDS:
      return {
        ...state,
        friends: action.friends,
      };

    case SET_CURRENT_PAGE_FRIENDS:
      return {
        ...state,
        currentPageFriends: action.currentPageFriends,
      }
    case SET_TOTAL_FRIENDS_COUNT:
      return {
        ...state,
        totalFriendsCount: action.totalFriendsCount,
      }
    case TOGGLE_IS_FETCHING_FRIENDS:
      return {
        ...state,
        isFetchingFriends: action.isFetchingFriends,
      }
    case TOGGLE_IS_REMOVING_PROGRESS:
      return {
        ...state,
        unFollowingInProgress: action.isFetchingFriends 
        ? [...state.unFollowingInProgress, action.friendId] 
        : state.unFollowingInProgress.filter(id => id !== action.friendId),
      }
      case CLEAR_IN_FOLLOWING_PROGRESS:
      return {
        ...state,
        unFollowingInProgress: [] 
      }
    default:
      return state;
  }
};

export const setFriends = (friends) => ({ type: SET_FRIENDS, friends});
export const setCurrentPageFriends = (currentPageFriends) => ({type: SET_CURRENT_PAGE_FRIENDS, currentPageFriends}) 
export const setTotalFriendsCount = (totalFriendsCount) => ({type: SET_TOTAL_FRIENDS_COUNT, totalFriendsCount})
export const toggleIsFetching = (isFetchingFriends) => ({type: TOGGLE_IS_FETCHING_FRIENDS, isFetchingFriends})
export const toggleUnFollowingProgress = (isFetchingFriends, friendId) => ({type: TOGGLE_IS_REMOVING_PROGRESS, isFetchingFriends, friendId})
export const clearInFollowingProgress = () => ({type: CLEAR_IN_FOLLOWING_PROGRESS})



export const requestFriends = (currentPageFriends, pageSizeFriends) => {
  return  async (dispatch) => {
    dispatch(setCurrentPageFriends(currentPageFriends))
    dispatch(toggleIsFetching(true))

    let data = await usersAPI.getFriends(currentPageFriends, pageSizeFriends);
    dispatch(toggleIsFetching(false));
    dispatch(setFriends(data.items));
    dispatch(setTotalFriendsCount (data.totalCount));
    dispatch(clearInFollowingProgress());
  } 
}


export const unFollowFriends = (friendId, currentPageFriends, pageSizeFriends) => {
  return async (dispatch) => {
    dispatch(toggleUnFollowingProgress(true, friendId));
    let response = await usersAPI.unfollow(friendId);
    if (response.data.resultCode === 0) {
      dispatch(requestFriends(currentPageFriends, pageSizeFriends));
    }
  }
}


export default friendReducer;
