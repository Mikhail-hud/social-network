import React, { useEffect, useCallback } from 'react';
import {
  follow,
  unFollow,
  requestUsers,
  changePageSize,
  setCurrentPage,
} from '../../redux/users-reducer';
import UsersPage from './UsersPage';
import { useSelector, useDispatch } from 'react-redux';

const UsersContainer = () => {
  const dispatch = useDispatch();
  const users = useSelector(({ usersPage }) => usersPage.users);
  const pageSize = useSelector(({ usersPage }) => usersPage.pageSize);
  const currentPage = useSelector(({ usersPage }) => usersPage.currentPage);
  const isFetching = useSelector(({ usersPage }) => usersPage.isFetching);
  const followingInProgress = useSelector(({ usersPage }) => usersPage.followingInProgress);
  const totalUsersCount = useSelector(({ usersPage }) => usersPage.totalUsersCount);

  useEffect(() => {
    dispatch(requestUsers(currentPage, pageSize));
  }, [dispatch, currentPage, pageSize]);

  const onUnfollow = useCallback(
    (id) => {
      dispatch(unFollow(id));
    },
    [dispatch],
  );

  const onFollow = useCallback(
    (id) => {
      dispatch(follow(id));
    },
    [dispatch],
  );

  const onChangePageSize = useCallback(
    (pageSize) => {
      dispatch(changePageSize(pageSize));
    },
    [dispatch],
  );

  const onSetCurrentPage = useCallback(
    (currentPage) => {
      dispatch(setCurrentPage(currentPage));
    },
    [dispatch],
  );

  return (
    <>
      <UsersPage
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        users={users}
        onUnfollow={onUnfollow}
        onFollow={onFollow}
        followingInProgress={followingInProgress}
        isFetching={isFetching}
        onChangePageSize={onChangePageSize}
        onSetCurrentPage={onSetCurrentPage}
      />
    </>
  );
};

export default UsersContainer;
