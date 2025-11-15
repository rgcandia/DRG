import React, { useState, useEffect } from "react";
import styles from './TextOverlay.module.css';

const TextOverlay = () => {
const messages = [
  { 
    text: "Armado de PC Gamer a Medida — Alto rendimiento, RGB, refrigeración avanzada y componentes optimizados", 
    link: "/armados-gamer" 
  },
  { 
    text: "PC para Oficina y Trabajo — Equipos silenciosos, rápidos y estables para uso profesional", 
    link: "/armados-oficina" 
  },
  { 
    text: "Reparación de Notebooks y PC — Limpieza, mantenimiento, diagnósticos y mejoras de rendimiento", 
    link: "/reparacion" 
  },
  { 
    text: "Páginas Web Profesionales — Sitios modernos, rápidos y optimizados para pequeñas y medianas empresas", 
    link: "/webs" 
  }
];


  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % messages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.textOverlay}>
      <p className={styles.text}>{messages[index].text}</p>

      <a href={messages[index].link} className={styles.btn}>
        Más información
      </a>
    </div>
  );
}

export default TextOverlay;
