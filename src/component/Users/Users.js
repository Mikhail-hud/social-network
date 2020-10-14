import React from "react";
import Paginator from "../../Common/Paginator/Paginator";
import User from './User/User'

let Users = React.memo(({currentPage, onPageChanged,totalUsersCount,pageSize, users, ...props}) => {
  
  return (
    <>
      <h1>Users</h1>
      <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount} pageSize={pageSize}/>
      {users.map(u => {
        return <User key={u.id} user={u} followingInProgress={props.followingInProgress} follow={props.follow} unFollow={props.unFollow}/>
      })}
    </>
  );
});

export default Users;
