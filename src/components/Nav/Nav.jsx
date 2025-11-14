import { useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa"; // Importar los íconos de las redes sociales
import styles from "./Nav.module.css";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      {/* LOGO */}
      <div className={styles.logoContainer}>
        <img
          src="/img/logo2.webp"
          alt="Logo"
          className={styles.logo}
          loading="eager"
        />
      </div>

      {/* MENÚ DE ESCRITORIO */}
      <nav className={styles.desktopMenu}>
        <a href="#">Inicio</a>
        <a href="#">Servicios</a>
        <a href="#">Contacto</a>
      </nav>

      {/* ICONOS DE REDES SOCIALES EN EL MENÚ DE ESCRITORIO */}
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
        <a href="#">Inicio</a>
        <a href="#">Servicios</a>
        <a href="#">Contacto</a>

        {/* ICONOS DE REDES SOCIALES EN EL MENÚ MÓVIL */}
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
