import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./Nav.module.css";

const NavWithHooks = () => {
  let [toggle, toggleMenu] = useState(false);

  const setToggleMenu = () => {
    toggleMenu(true)
  }

  const closeToggleMenu = () => {
    toggleMenu(false)
  }
    return (
      <nav className={s.nav}>
        <h1>Welcome</h1>
        <ul className={toggle ? `${s.toggle}` : ""}>
          <li>
            <NavLink onClick={closeToggleMenu} to="/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink onClick={closeToggleMenu} to="/dialogs">Dialogs</NavLink>
          </li>
          <li>
            <NavLink onClick={closeToggleMenu} to="/users">Users</NavLink>
          </li>
          <li className={s.close} onClick={closeToggleMenu}>
            x
          </li>
        </ul>
        <div className={s.menu} onClick={setToggleMenu}>
          Menu
        </div>
      </nav>
    );
}

export default NavWithHooks;
