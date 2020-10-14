import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import n from "./Nav.module.css";

const NavWithHooks = () => {
  let [toggle, toggleMenu] = useState(false);

  const setToggleMenu = () => {
    toggleMenu(!toggle)

  }
    return (
      <nav className={n.nav}>
        <h1>Welcome</h1>
        <ul className={toggle ? `${n.toggle}` : ""}>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/dialogs">Dialogs</NavLink>
          </li>
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
          <li className={n.close} onClick={setToggleMenu}>
            x
          </li>
        </ul>
        <div className={n.menu} onClick={setToggleMenu}>
          Menu
        </div>
      </nav>
    );
}

export default NavWithHooks;
