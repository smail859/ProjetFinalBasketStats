import { useState } from "react";
import { MenuDataBis } from "./MenuDataBis";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./navbar.css";

function NavBarBis({ children, title }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="container">
      <div style={{ width: isOpen ? "300px" : "50px" }} className="sidebar">
        <div className="top_selection">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            {title}
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>

        {MenuDataBis.map((item, index) => (
          <NavLink
            to={item.url}
            key={index}
            className="link"
            activeclassname="active"
          >
            <div className="icon"> {item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {" "}
              {item.title}{" "}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
}

export default NavBarBis;
