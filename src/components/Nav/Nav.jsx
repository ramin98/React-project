import React from 'react';
import c from './Nav.module.css';
import {NavLink} from "react-router-dom";

function Nav() {
    return (
        <nav className={c.nav}>
           <div className={c.nav_items}>
              <a className={c.active} href="#">News</a>
           </div>
           <div className={c.nav_items}>
           <NavLink className={c.active} activeClassName={c.activeL} to="/dialogs">Message</NavLink>
           </div>
           <div className={c.nav_items}>
           <NavLink className={c.active} activeClassName={c.activeL} to="/main">My page</NavLink>
           </div>
           <div className={c.nav_items}>
           <a className={c.active} href="#">Setings</a>
           </div>
        </nav>
    );
  }
  
export default Nav;