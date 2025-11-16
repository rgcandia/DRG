import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import styles from "./Nav.module.css";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      {/* LOGO */}
  <div className={styles.logoContainer}>
  <Link to="/">
    <img
      src="/img/logo2.webp"
      alt="Logo"
      className={styles.logo}
      loading="eager"
    />
  </Link>
</div>


      {/* MENÚ DE ESCRITORIO */}
      <nav className={styles.desktopMenu}>
        <Link to="/">Inicio</Link>
        <Link to="/servicios">Servicios</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>

      {/* ICONOS DE REDES SOCIALES */}
      <div className={styles.socialIcons}>
        <a href="#" className={styles.iconLink}>
          <FaFacebook className={styles.icon} />
        </a>
        <a href="#" className={styles.iconLink}>
          <FaInstagram className={styles.icon} />
        </a>
      </div>

      {/* BOTÓN HAMBURGUESA */}
      <button
        className={`${styles.burger} ${open ? styles.open : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Abrir menú"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* MENÚ MÓVIL */}
      <nav className={`${styles.mobileMenu} ${open ? styles.active : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Inicio</Link>
        <Link to="/servicios" onClick={() => setOpen(false)}>Servicios</Link>
        <Link to="/contacto" onClick={() => setOpen(false)}>Contacto</Link>

        {/* ICONOS REDES MOBILE */}
        <div className={styles.socialIconsMobile}>
          <a href="#" className={styles.iconLink}>
            <FaFacebook className={styles.icon} />
          </a>
          <a href="#" className={styles.iconLink}>
            <FaInstagram className={styles.icon} />
          </a>
        </div>
      </nav>
    </header>
  );
}
