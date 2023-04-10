// REACT
import { useState } from "react";
// COMPONENTS
import { MenuDataBis } from "./MenuDataBis";
// NAVIGATION
import { NavLink } from "react-router-dom";
// ICON
import { FaBars } from "react-icons/fa";
// STYLE
import "./navbar.css";

function NavBarBis({ children, title }) {
  // Utilisation de useState pour gérer l'état de la barre latérale
  const [isOpen, setIsOpen] = useState(false);
  // Fonction qui s'active lors du clic sur l'icône de la barre de menu
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

        {/* Boucle sur les données de menu pour afficher les éléments */}
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
      {/* Contenu principal de la page */}
      <main>{children}</main>
    </div>
  );
}

export default NavBarBis;
