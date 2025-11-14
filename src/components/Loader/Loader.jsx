import React, { useState, useEffect } from "react";
import styles from "./Loader.module.css";  // Asumiendo que usas módulos CSS

export default function Loader() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => {
        if (v >= 100) {
          clearInterval(interval); // Detenemos el contador cuando llega a 100
          return 100;
        }
        return v + 1;
      });
    }, 30); // Ajusta la velocidad de incremento aquí (30ms)
    return () => clearInterval(interval); // Limpiamos el interval al desmontarse
  }, []);

  return (
    <div className={styles.loaderContainer}>
      <img src="/img/logo.png" alt="logo" className={styles.logo}/>
      <div className={styles.counter}>{value}%</div>
    </div>
  );
}
