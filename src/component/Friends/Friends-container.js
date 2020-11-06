import React, {useEffect} from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {setCurrentPageFriends,requestFriends,unFollowFriends} from "../../redux/friends-reducer";
import Friends from "./Friends";
import Preloader from "../../Common/Preloder/Preloader";
import { getPageSizeFriends, getTotalCountFriends, getCurrentPageFriends, getIsFetching, getfriends, getUnFollowingInProgress} from "../../redux/friends-selectors";

const FriendsContainer = ({totalFriendsCount, pageSizeFriends, currentPageFriends, friends, unFollowingInProgress, unFollowFriends, requestFriends, isFetchingFriends}) => {

  
  useEffect(() => {
    requestFriends(currentPageFriends, pageSizeFriends);
  }, [currentPageFriends, pageSizeFriends, requestFriends])


  const onPageChanged = (pageNumber) => {
    requestFriends(pageNumber,pageSizeFriends);
   }

    return (
      <>
        {isFetchingFriends ? <Preloader /> : null}
        <Friends
          totalFriendsCount={totalFriendsCount}
          pageSizeFriends={pageSizeFriends}
          currentPageFriends={currentPageFriends}
          onPageChanged={onPageChanged}
          friends={friends}
          unFollowingInProgress={unFollowingInProgress}
          unFollowFriends={unFollowFriends}
          requestFriends={requestFriends}
        />
      </>
    );
  
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