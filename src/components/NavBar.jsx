import { MenuData } from "./MenuData";
import "../styles/navbar.css";

import { NavLink } from "react-router-dom";
import { Typography, ListItemIcon } from "@mui/material";

function NavBar() {
  return (
    <nav className="NavBarItems">
      <h1 className="logo"> Basket-Stats</h1>

      <ul className="nav_menu">
        {MenuData.map((item, index) => (
          <NavLink to={item.url}>
            <li className={item.cName} key={index}>
              <ListItemIcon className="icon">{item.icon}</ListItemIcon>
              <Typography>{item.title}</Typography>
            </li>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
