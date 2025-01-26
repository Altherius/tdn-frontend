import { NavLink } from "react-router-dom"

export default function Menu() {
    return <nav>
        <ul>
            <li><NavLink to="/">Classement</NavLink></li>
            <li><NavLink to="/tournaments">Tournois</NavLink></li>
            <ul>
                <li><NavLink to="/tournaments/new">Créer un tournoi</NavLink></li>
            </ul>
            <li><NavLink to="/games/new">Créer un match</NavLink></li>
        </ul>
    </nav>
}