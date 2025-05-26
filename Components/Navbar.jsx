import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" onClick={closeMenu}>
          <img
            className="img-logo"
            src="/images/logo-cotix.png"
            alt="CotiX Logo"
          />
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <ul className={`nav-links${menuOpen ? " open" : ""}`}>
          <li className="link">
            <NavLink to="/" onClick={closeMenu}>
              Inicio
            </NavLink>
          </li>
          <li className="link">
            <NavLink to="/sobremi" onClick={closeMenu}>
              Sobre mí
            </NavLink>
          </li>
          <li className="link">
            <NavLink to="/planes" onClick={closeMenu}>
              Planes
            </NavLink>
          </li>
          <li className="Link-contacto">
            <NavLink to="/contacto" onClick={closeMenu}>
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>

      <div
        className={`menu-overlay${menuOpen ? " open" : ""}`}
        onClick={closeMenu}
        aria-hidden={!menuOpen}
      />
    </>
  );
}
