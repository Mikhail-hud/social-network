import React from "react";
import s from "./Posts.module.css";
import logo from "./user.png";

const Posts = (props) => {

  return (
    <div className={s.posts}>
      <div className={s.posts_logo}>
        <img src={logo} alt='user'/>
      </div>
      <div className={s.posts_text}>
        <p>{props.massage}</p>
          <div className={s.posts_likes}>
            <i className="far fa-heart">
              <span className={s.posts_count}>{props.likesCount}</span>
            </i>
          </div>
      </div>
    </div>
  );
};

export default Posts;
