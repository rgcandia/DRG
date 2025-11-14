import React, { useState, useEffect } from "react";
import styles from "./Loader.module.css";  

export default function Loader({ onLoaded }) {
  // Estado para el contador simulado
  const [value, setValue] = useState(0);

  useEffect(() => {
    // 1. Simulación del contador: cuenta de 0 a 100
    const interval = setInterval(() => {
      setValue((v) => {
        if (v >= 100) {
          clearInterval(interval);
          // Notifica al componente padre que la carga (simulada) ha terminado
          if (onLoaded) {
            onLoaded();
          }
          return 100;
        }
        return v + 1;
      });
    }, 30); // Incrementa cada 30ms (la cuenta dura 3 segundos)

    return () => clearInterval(interval);
  }, [onLoaded]);


  return (
    <div className={styles.loaderContainer}>
      <img 
        src="/img/logo.webp" 
        alt="logo" 
        className={styles.logo}
        // Optimización de carga: "eager" fuerza la carga inmediata
        loading="eager" 
        // Proporciona dimensiones para evitar el 'Layout Shift'
        width="200"     
        height="200"   
      />
      <div className={styles.counter}>{value}%</div>
    </div>
  );
}