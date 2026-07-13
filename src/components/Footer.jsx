import { MessageCircle } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../assets/axis-logo.png";
import { FOOTER_COMMERCIAL, FOOTER_SUMMARY, INOVA_SCRIPT_LINK } from "../siteContent";

function Footer({ navItems, whatsappLink }) {
  return (
    <>
      <footer className="site-footer">
        <div className="container footer-grid footer-grid-rich">
          <div className="footer-brand">
            <img src={logo} alt="Logo Axis Industria" />
            <p>
              Axis Industria - manutencao, reforma e desenvolvimento de maquinas,
              conjuntos e solucoes industriais sob medida.
            </p>
          </div>

          <div className="footer-column">
            <h3>Navegacao</h3>
            <div className="footer-link-list">
              {navItems.map((item) => (
                <NavLink key={item.href} to={item.href}>
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="footer-column">
            <h3>Linha resumida</h3>
            <div className="footer-link-list">
              {FOOTER_SUMMARY.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div className="footer-column">
            <h3>Comercial</h3>
            <div className="footer-link-list">
              {FOOTER_COMMERCIAL.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="container footer-bottom footer-bottom-rich">
          <span>Copyright 2026 Axis Industria. Direitos reservados.</span>
          <a href={INOVA_SCRIPT_LINK} target="_blank" rel="noreferrer">
            Site desenvolvido pela <strong>Inova Script</strong>
          </a>
        </div>
      </footer>

      <a
        className="floating-whatsapp"
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Chamar no WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </>
  );
}

export default Footer;
