import { NavLink } from "react-router-dom";

import "./menu.css";

export default function Menu() {
  return (
    <nav className="menu">
      <NavLink className="menu__title" to="/">Tournoi des nations</NavLink>
      <NavLink className="menu__item" to="/">Classement</NavLink>
      <NavLink className="menu__item" to="/tournaments">Tournois</NavLink>
    </nav>
  );
}
