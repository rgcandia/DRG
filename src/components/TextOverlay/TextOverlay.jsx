import React, { useState, useEffect } from "react";
import styles from './TextOverlay.module.css';

const TextOverlay = () => {

  const messages = [
    { 
      title: "Armado de PC Gamer a Medida",
      description: "Equipos de alto rendimiento con RGB, refrigeración optimizada y componentes seleccionados según tu presupuesto.",
      link: "/armados-gamer" 
    },
    { 
      title: "PC para Oficina y Trabajo",
      description: "Computadoras silenciosas, rápidas y estables para tareas profesionales, multitarea y uso diario.",
      link: "/armados-oficina" 
    },
    { 
      title: "Reparación de Notebooks y PC",
      description: "Mantenimiento, limpieza profunda, mejoras de rendimiento, diagnósticos y reparaciones completas.",
      link: "/reparacion" 
    },
    { 
      title: "Páginas Web Profesionales",
      description: "Sitios rápidos, modernos, optimizados para negocios y completamente adaptables a móviles.",
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
      
      {/* TÍTULO */}
      <h2 className={styles.title}>
        {messages[index].title}
      </h2>

      {/* DESCRIPCIÓN */}
      <p className={styles.description}>
        {messages[index].description}
      </p>

      <a href={messages[index].link} className={styles.btn}>
        Más información
      </a>

    </div>
  );
}

export default TextOverlay;

