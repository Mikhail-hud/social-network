import React from "react";
import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  unFollow,
  requestUsers,
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../../Common/Preloder/Preloader";
import { compose } from "redux";
import { getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress, getUsers} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    const {currentPage,pageSize} = this.props
    this.props.requestUsers(currentPage, pageSize);
  }

  onPageChanged = (pageNumber) => {
    const {pageSize} = this.props
    this.props.requestUsers(pageNumber,pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users 
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          unFollow={this.props.unFollow}
          follow={this.props.follow}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}


let mapStateToProps = (state) => {
    return {
      users: getUsers(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      followingInProgress: getFollowingInProgress(state),
    };
 };

export default compose (
  connect(mapStateToProps, {follow,unFollow,setCurrentPage,requestUsers})
)(UsersContainer)