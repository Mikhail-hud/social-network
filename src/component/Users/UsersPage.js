import React from 'react';
import Paginator from '../../common/Paginator/Paginator';
import User from './User/User';

let Users = React.memo(
  (props) => {
    const {currentPage, totalUsersCount, pageSize, isFetching, users, onFollow, onUnfollow, followingInProgress, onChangePageSize, onSetCurrentPage} = props;
    return (
      <>
        <h1>Users</h1>
        <Paginator
          currentPage={currentPage}
          isFetching={isFetching}
          totalItemsCount={totalUsersCount}
          pageSize={pageSize}
          onChangePageSize={onChangePageSize}
          onSetCurrentPage={onSetCurrentPage}
        />
        <User
          user={users}
          followingInProgress={followingInProgress}
          onFollow={onFollow}
          onUnfollow={onUnfollow}
          isFetching={isFetching}
        />
      </>
    );
  },
);

export default Users;
