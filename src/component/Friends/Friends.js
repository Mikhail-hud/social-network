import React from "react";
import Paginator from "../../Common/Paginator/Paginator";
import Frend from './Frend/Frend'

let Friends = React.memo(({currentPageFriends, onPageChanged,totalFriendsCount,pageSizeFriends, friends, unFollowingInProgress, unFollowFriends}) => {
  return (
    <>
      <h1>Friends</h1>
      <Paginator currentPage={currentPageFriends} onPageChanged={onPageChanged} totalItemsCount={totalFriendsCount} pageSize={pageSizeFriends}/>
      {friends.map(friend => {
        return <Frend key={friend.id} friend={friend} unFollowingInProgress={unFollowingInProgress}  unFollowFriends={unFollowFriends}  currentPageFriends={currentPageFriends} pageSizeFriends={pageSizeFriends} />
      })}
    </>
  );
});

export default Friends;
