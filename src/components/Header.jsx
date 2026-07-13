import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/axis-logo.png";

function Header({ navItems }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 860) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`site-header ${isHome ? "site-header-overlay" : "site-header-solid"}`}>
      <div className="container header-inner">
        <NavLink className="brand" to="/" aria-label="Ir para o inicio">
          <img src={logo} alt="Logo Axis Industria" />
        </NavLink>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Abrir menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={`nav-shell ${isMenuOpen ? "is-open" : ""}`}>
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) => (isActive ? "is-active" : "")}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
