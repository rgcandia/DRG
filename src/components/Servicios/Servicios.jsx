import React from "react";
import { Link } from "react-router-dom"; // <- Import Link
import styles from "./Servicios.module.css";
import { DesktopTower, Wrench, Globe } from "@phosphor-icons/react";
import Nav from "../Nav/Nav";

const Servicios = () => {
  return (
    <>
      <Nav />

      <div className={styles.serviciosContainer}>

        {/* HEADER: dragon a la izquierda + texto a la derecha */}
        <header className={styles.headerRow}>
          <div className={styles.headerText}>
            <h1 className={styles.title}>Nuestros Servicios</h1>
            <p className={styles.lead}>
              Armados, reparaciones y desarrollo web con enfoque profesional.
              Soluciones a medida para gamers, empresas y usuarios domésticos.
            </p>
          </div>

          <div className={styles.imageWrap}>
            <img
              src="/img/dragon-servicios.png"
              alt="Dragón servicios"
              className={styles.titleImage}
            />
          </div>
        </header>

        {/* === CONTENEDOR DE CARDS === */}
        <div className={styles.cardsWrapper}>

          {/* === ARMADO DE PC === */}
          <div className={styles.card}>
            <DesktopTower
              size={48}
              weight="bold"
              color="#00eaff"
              className={styles.icon}
            />
            <h2>Armado de PC</h2>
            <p>
              Equipos gamer y de oficina armados a medida. Elegimos los mejores componentes según tu presupuesto y necesidad.
            </p>
            <Link to="/armados-gamer" className={styles.btn}>Ver más</Link>
          </div>

          {/* === REPARACIÓN === */}
          <div className={styles.card}>
            <Wrench
              size={48}
              weight="bold"
              color="#00eaff"
              className={styles.icon}
            />
            <h2>Reparación de PC y Notebooks</h2>
            <p>
              Limpieza profunda, mantenimiento, mejoras de rendimiento, diagnósticos y reparación de hardware/software.
            </p>
            <Link to="/reparacion" className={styles.btn}>Ver más</Link>
          </div>

          {/* === PÁGINAS WEB === */}
          <div className={styles.card}>
            <Globe
              size={48}
              weight="bold"
              color="#00eaff"
              className={styles.icon}
            />
            <h2>Desarrollo Web</h2>
            <p>
              Sitios modernos, rápidos y a medida para PYMEs. Diseño responsive y optimización SEO básica.
            </p>
            <Link to="/webs" className={styles.btn}>Ver más</Link>
          </div>

        </div>

        {/* Botón flotante WhatsApp */}
        <a
          href="https://wa.me/5491156191204"
          className={styles.wafloat}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
          />
        </a>
      </div>
    </>
  );
};

export default Servicios;
