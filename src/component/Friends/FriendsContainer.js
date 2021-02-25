import React, { useEffect} from 'react';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import {
  setCurrentPageFriends,
  requestFriends,
  unFollowFriends,
  changePageSizeFriends,
} from '../../redux/friends-reducer';
import Friends from './FriendsPage';
import { useSelector, useDispatch } from 'react-redux';

const FriendsContainer = () => {
  const dispatch = useDispatch();
  const friends = useSelector(({ friends }) => friends.friends);
  const totalFriendsCount = useSelector(({ friends }) => friends.totalFriendsCount);
  const pageSizeFriends = useSelector(({ friends }) => friends.pageSizeFriends);
  const currentPageFriends = useSelector(({ friends }) => friends.currentPageFriends);
  const isFetchingFriends = useSelector(({ friends }) => friends.isFetchingFriends);
  const unFollowingInProgress = useSelector(({ friends }) => friends.unFollowingInProgress);

  useEffect(() => {
    dispatch(requestFriends(currentPageFriends, pageSizeFriends));
  }, [currentPageFriends, pageSizeFriends, dispatch]);

  const onUnFollowFriend = (id) => {
    dispatch(unFollowFriends(id));
  };

  const onChangePageSize = (pageSize) => {
    dispatch(changePageSizeFriends(pageSize));
  };

  const onSetCurrentPage = (currentPage) => {
    dispatch(setCurrentPageFriends(currentPage));
  };

  return (
    <>
      <Friends
        totalFriendsCount={totalFriendsCount}
        pageSizeFriends={pageSizeFriends}
        currentPageFriends={currentPageFriends}
        isFetchingFriends={isFetchingFriends}
        friends={friends}
        unFollowingInProgress={unFollowingInProgress}
        onUnFollowFriend={onUnFollowFriend}
        onChangePageSize={onChangePageSize}
        onSetCurrentPage={onSetCurrentPage}
      />
    </>
  );
};

export default compose(withAuthRedirect)(FriendsContainer);
