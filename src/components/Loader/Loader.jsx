import React from "react";
import styles from "./Loader.module.css";

export default function Loader({ onLoaded }) {
  return (
    <div className={styles.loaderContainer}>
      <video
        src="/video/inicio.mp4" // Ruta al video en la carpeta public
        className={styles.video}
        autoPlay // Reproduce el video automáticamente
        loop // Repite el video indefinidamente
        muted // Silencia el video
        playsInline // Permite que el video se reproduzca correctamente en móviles
      />
    </div>
  );
}
