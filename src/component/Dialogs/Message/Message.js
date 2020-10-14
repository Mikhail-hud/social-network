import React from "react";
import s from "./../Dialogs.module.css";
import logo from './user.png'

const Message = (props) => {
  return (
    <div className={s.dialogs_users_container}>
      <div className={s.dialogs_users_logo}>
        <img src={logo}  alt='dialogs_logo'/>
        <p>Dmitry</p>
      </div>
      <div className={s.dialogs_users__text}>
        <p>{props.message}</p>
      </div>
    </div>
  );
};

export default Message;
