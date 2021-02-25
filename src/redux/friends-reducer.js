import { usersAPI } from '../api/api';
const SET_FRIENDS = 'SET-FRIENDS';
const SET_CURRENT_PAGE_FRIENDS = 'SET-CURRENT-PAGE-FRIENDS';
const SET_TOTAL_FRIENDS_COUNT = 'SET-TOTAL-FRIENDS-COUNT';
const TOGGLE_IS_FETCHING_FRIENDS = 'TOGGLE-IS-FETCHING-FRIENDS';
const TOGGLE_IS_REMOVING_PROGRESS = 'TOGGLE-IS-REMOVING-PROGRESS';
const CLEAR_IN_FOLLOWING_PROGRESS = 'CLEAR_IN_FOLLOWING_PROGRESS';
const DELETE_FREND = 'DELETE-FREND';
const CHANGE_PAGE_SIZE_FRIENDS = 'CHANGE-PAGE-SIZE-FRIENDS';

let initialState = {
  friends: [],
  pageSizeFriends: 5,
  totalFriendsCount: 0,
  currentPageFriends: 1,
  isFetchingFriends: false,
  unFollowingInProgress: [],
};

const friendReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FRIENDS:
      return {
        ...state,
        friends: action.friends,
      };

    case DELETE_FREND:
      return {
        ...state,
        friends: state.friends.filter((friend) => {
          if (friend.id !== action.id) {
            return {
              ...friend,
            };
          }
          return null;
        }),
      };

    case SET_CURRENT_PAGE_FRIENDS:
      return {
        ...state,
        currentPageFriends: action.currentPageFriends,
        isFetchingFriends: true,
      };
    case SET_TOTAL_FRIENDS_COUNT:
      return {
        ...state,
        totalFriendsCount: action.totalFriendsCount,
      };
    case TOGGLE_IS_FETCHING_FRIENDS:
      return {
        ...state,
        isFetchingFriends: action.isFetchingFriends,
      };
    case TOGGLE_IS_REMOVING_PROGRESS:
      return {
        ...state,
        unFollowingInProgress: action.isFetchingFriends
          ? [...state.unFollowingInProgress, action.friendId]
          : state.unFollowingInProgress.filter((id) => id !== action.friendId),
      };
    case CLEAR_IN_FOLLOWING_PROGRESS:
      return {
        ...state,
        unFollowingInProgress: [],
      };

    case CHANGE_PAGE_SIZE_FRIENDS:
      return {
        ...state,
        pageSizeFriends: action.pageSizeFriends,
        isFetchingFriends: true,
      };
    default:
      return state;
  }
};

export const setFriends = (friends) => ({ type: SET_FRIENDS, friends });
export const setCurrentPageFriends = (currentPageFriends) => ({
  type: SET_CURRENT_PAGE_FRIENDS,
  currentPageFriends,
});
export const setTotalFriendsCount = (totalFriendsCount) => ({
  type: SET_TOTAL_FRIENDS_COUNT,
  totalFriendsCount,
});
export const toggleIsFetching = (isFetchingFriends) => ({
  type: TOGGLE_IS_FETCHING_FRIENDS,
  isFetchingFriends,
});
export const toggleUnFollowingProgress = (isFetchingFriends, friendId) => ({
  type: TOGGLE_IS_REMOVING_PROGRESS,
  isFetchingFriends,
  friendId,
});
export const clearInFollowingProgress = () => ({ type: CLEAR_IN_FOLLOWING_PROGRESS });
export const deleteFrend = (id) => ({ type: DELETE_FREND, id });
export const changePageSizeFriends = (pageSizeFriends) => ({
  type: CHANGE_PAGE_SIZE_FRIENDS,
  pageSizeFriends,
});

export const requestFriends = (currentPageFriends, pageSizeFriends) => {
  return async (dispatch) => {
    // dispatch(toggleIsFetching(true));
    let data = await usersAPI.getFriends(currentPageFriends, pageSizeFriends);
    dispatch(toggleIsFetching(false));
    dispatch(setFriends(data.items));
    dispatch(setTotalFriendsCount(data.totalCount));
    dispatch(clearInFollowingProgress());
  };
};

export const unFollowFriends = (friendId) => {
  return async (dispatch) => {
    dispatch(toggleUnFollowingProgress(true, friendId));
    let response = await usersAPI.unfollow(friendId);
    if (response.data.resultCode === 0) {
      dispatch(deleteFrend(friendId));
    }
  };
};

export default friendReducer;
