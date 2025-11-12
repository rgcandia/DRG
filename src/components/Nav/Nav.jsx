import { useState } from "react";
import styles from "./Nav.module.css";

export default function Nav({ animate }) {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.navbar}>
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
      </nav>

      {/* MENÚ DE ESCRITORIO */}
      <nav className={`${styles.desktopMenu} ${animate ? styles.animate : ""}`}>
        <a href="#">Inicio</a>
        <a href="#">Servicios</a>
        <a href="#">Contacto</a>
      </nav>
    </header>
  );
}
