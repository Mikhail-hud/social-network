import { createSelector } from "reselect"

const getUsersfriends = (state) => {
    return state.friends.friends
}

export const getfriends = createSelector(getUsersfriends, (friends) => {
   return friends.filter(u => true);
})

export const getPageSizeFriends = (state) => {
    return state.friends.pageSizeFriends
        
}

export const getTotalCountFriends = (state)=> {
    return state.friends.totalFriendsCount
}

export const getCurrentPageFriends = (state)=> {
    return state.friends.currentPageFriends
}

export const getIsFetching = (state)=> {
    return state.friends.isFetchingFriends
}

export const getUnFollowingInProgress = (state)=> {
    return state.friends.unFollowingInProgress
}









