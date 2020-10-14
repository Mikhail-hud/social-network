import { connect } from "react-redux";
import { compose } from "redux";
import {
  addPostActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

let mapStateDispatchToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText));
    },
  };
};

export default compose (
  connect (mapStateDispatchToProps,mapDispatchToProps),
)(MyPosts)
// const MyPostsContainer = connect(
//   mapStateDispatchToProps,
//   mapDispatchToProps
// )(MyPosts);

// export default MyPostsContainer;
