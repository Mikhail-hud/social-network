import React from "react";
import s from "./User.module.css";
import logo from "./logo.png";
import { NavLink } from "react-router-dom";

let User = ({user,followingInProgress, unFollow, follow}) => {
 
  return (
      <section className={s.users_container} key={user.id}>
          <div className={s.users_logo}>
            <div className={s.users_center}>
              <NavLink to={`/profile/` + user.id}>
                <img src={user.photos.small !== null ? user.photos.small : logo} alt="dialogs_logo"/>
              </NavLink>
            </div>
            <div className={s.users_center}>
              {user.followed 
              ? (<button disabled={followingInProgress.some((id) => id === user.id)} onClick={() => {unFollow(user.id)}} className={s.users_btn} type="button">Unfollow</button>)
              : (<button disabled={followingInProgress.some((id) => id === user.id)} onClick={() => {follow(user.id)}} className={s.users_btn} type="button">follow</button>)
              }
            </div>
          </div>
          <div className={s.users_text}>
            <div className={s.users_info}>
              <h3>{user.name}</h3>
              <p>{user.status}</p>
            </div>
            <div className={s.users_info}>
              <p>{"User Country"}</p>
              <p>{"User City"}</p>
            </div>
          </div>
      </section>
  );
};

export default User;
