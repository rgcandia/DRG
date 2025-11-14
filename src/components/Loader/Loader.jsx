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
      <video
        src="/video/inicio.mp4" // Ruta al video en la carpeta public
        className={styles.video}
        autoPlay // Reproduce el video automáticamente
        loop // Repite el video indefinidamente
        muted // Silencia el video si es necesario
        playsInline // Permite que el video se reproduzca correctamente en móviles
      />
      <div className={styles.counter}>{value}%</div>
    </div>
  );
}
