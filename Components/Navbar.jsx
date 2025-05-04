import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";


export function Navbar() {
    return (
        <nav className="navbar">
            <img className="img-logo" src="./public/images/logo-cotix.png" alt="CotiX Logo" />
            <ul className="nav-links">
                <li className="link">
                    <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                        Inicio
                    </NavLink>
                </li>
                <li className="link">
                    <NavLink to="/sobremi" className={({ isActive }) => (isActive ? "active" : "")}>
                        Sobre mi
                    </NavLink>
                </li>
                <li className="link">
                    <NavLink to="/planes" className={({ isActive }) => (isActive ? "active" : "")}>
                        Planes
                    </NavLink>
                </li>
                <li className="link">
                    <NavLink to="/faq" className={({ isActive }) => (isActive ? "active" : "")}>
                        FAQ
                    </NavLink>
                </li>
                <li className="Link-contacto">
                    <NavLink to="/contacto" className={({ isActive }) => (isActive ? "active" : "")}>
                        Contacto
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}