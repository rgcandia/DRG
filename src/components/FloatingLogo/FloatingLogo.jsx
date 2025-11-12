import { useEffect, useState } from "react";
import styles from "./FloatingLogo.module.css";

export default function FloatingLogo({ onFinish }) {
  const [corner, setCorner] = useState(false);

  useEffect(() => {
    // Mueve el logo a la esquina después de 2.5s
    const timer = setTimeout(() => {
      setCorner(true);
      // Esperá un poco más para que termine la animación antes de mostrar el contenido
      setTimeout(() => onFinish?.(), 1000);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={`${styles.logoContainer} ${corner ? styles.corner : ""}`}>
      <img src="/img/logo.png" alt="Logo DRG" className={styles.logo} />
    </div>
  );
}
