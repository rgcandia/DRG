import React from "react";
import styles from "./Loader.module.css";

export default function Loader({ onLoaded }) {
  return (
    <div className={styles.loaderContainer}>
      <video
        src="/video/inicio.mp4"
        className={styles.video}
        autoPlay
        muted
        playsInline
        onEnded={onLoaded}   // 🔥 dispara loading = false
      />
    </div>
  );
}
