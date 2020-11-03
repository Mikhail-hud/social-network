import React from "react";
import s from "./Posts.module.css";
import logo from "./user.png";
import logo_delete from "./delete.png";

const Posts = (props) => {
  return (
    <div className={s.posts}>
      <div className={s.posts_logo}>
        <img src={logo} alt='user'/>
      </div>
      <div className={s.posts_text}>
        <p>{props.massage}</p>
          <div onClick={()=> {props.onAddLike(props.id)}} className={s.posts_likes}>
            <i className="far fa-heart">
              <span  className={s.posts_count}>{props.likesCount}</span>
            </i>
          </div>
      </div>
      <div className={s.delete_post}>
        <img onClick={()=> {props.onDeletePost(props.id)}} src={logo_delete} alt='delete logo'/>
      </div>
    </div>
  );
};

export default Posts;
