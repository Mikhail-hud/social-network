import React from "react";
import s from "./MyPosts.module.css";
import Posts from "./Posts/Posts";
import AddNewPostForm from './AddPostForm/AddPostForm'

const MyPosts = (props) => {
  let postsElements = [...props.posts].reverse().map((p) => (
    <Posts massage={p.message} likesCount={p.likesCount} key={p.id} />
  ));

  const onAddPost = (value) => {
    props.addPost(value.newPostText);
  };
  
  
  return (
    <section className={s.myposts}>
      <h2>My posts</h2>
      <AddNewPostForm onSubmit={onAddPost}/>
      {postsElements}
    </section>
  );
};



export default MyPosts;
