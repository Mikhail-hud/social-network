import React from 'react';
import Paginator from '../../Common/Paginator/Paginator';
import Friend from './Friend/Friend';

let Friends = React.memo(
  ({
    isFetchingFriends,
    currentPageFriends,
    totalFriendsCount,
    pageSizeFriends,
    friends,
    unFollowingInProgress,
    onUnFollowFriend,
    onSetCurrentPage,
    onChangePageSize,
  }) => {
    return (
      <>
        <h1>Friends</h1>
        <Paginator
          currentPage={currentPageFriends}
          totalItemsCount={totalFriendsCount}
          pageSize={pageSizeFriends}
          onSetCurrentPage={onSetCurrentPage}
          onChangePageSize={onChangePageSize}
          isFetching={isFetchingFriends}
        />
        <Friend
          isFetchingFriends={isFetchingFriends}
          friends={friends}
          unFollowingInProgress={unFollowingInProgress}
          onUnFollowFriend={onUnFollowFriend}
        />
      </>
    );
  },
);

export default Friends;
