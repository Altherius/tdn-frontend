import { NavLink } from "react-router-dom"

export default function Menu() {
    return <nav>
        <ul>
            <li><NavLink to="/">Classement</NavLink></li>
            <li><NavLink to="/tournaments">Tournois</NavLink></li>
        </ul>
    </nav>
}