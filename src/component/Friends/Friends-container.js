import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {setCurrentPageFriends,requestFriends,unFollowFriends} from "../../redux/friends-reducer";
import Friends from "./Friends";
import Preloader from "../../Common/Preloder/Preloader";
import { getPageSizeFriends, getTotalCountFriends, getCurrentPageFriends, getIsFetching, getfriends, getUnFollowingInProgress} from "../../redux/friends-selectors";

class FriendsContainer extends React.Component {
  componentDidMount() {
    const {currentPageFriends,pageSizeFriends} = this.props
    this.props.requestFriends(currentPageFriends, pageSizeFriends);
  }

   onPageChanged = (pageNumber) => {
    const {pageSizeFriends} = this.props
    this.props.requestFriends(pageNumber,pageSizeFriends);
  };

  render() {
    return (
      <>
        {this.props.isFetchingFriends ? <Preloader /> : null}
        <Friends
          totalFriendsCount={this.props.totalFriendsCount}
          pageSizeFriends={this.props.pageSizeFriends}
          currentPageFriends={this.props.currentPageFriends}
          onPageChanged={this.onPageChanged}
          friends={this.props.friends}
          unFollowingInProgress={this.props.unFollowingInProgress}
          unFollowFriends={this.props.unFollowFriends}
          requestFriends={this.props.requestFriends}
        />
      </>
    );
  }
}


let mapStateToProps = (state) => {
    return {
      friends: getfriends(state),
      pageSizeFriends: getPageSizeFriends(state),
      totalFriendsCount: getTotalCountFriends(state),
      currentPageFriends: getCurrentPageFriends(state),
      isFetchingFriends: getIsFetching(state),
      unFollowingInProgress: getUnFollowingInProgress(state),
    };
 };

export default compose (
  connect(mapStateToProps, {setCurrentPageFriends,requestFriends, unFollowFriends}),
  withAuthRedirect
)(FriendsContainer)