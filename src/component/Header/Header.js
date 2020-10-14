import React from "react";
import logo from "./logo.png";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

 
const Header = (props) => {
  return (
      <header className={s.header}>
        <section className={s.logo}>
          <img src={logo} alt='header_logo'/>
        </section>
        <section className={s.content}>
          {props.isAuth 
          ?
          <aside>
            <h3>{props.login}</h3>
            <button onClick={props.logout} className={s.logout_btn}>logout</button>
          </aside>
          :
          <NavLink className={s.login}  to={'/login'}>login</NavLink>}
        </section>
      </header>
  );
};

export default Header;
