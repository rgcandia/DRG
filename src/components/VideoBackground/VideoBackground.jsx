import styles from './VideoBackground.module.css';

const VideoBackground = () => {
  return (
    <div className={styles.videoContainer}>
      <video
        className={styles.video}
        autoPlay
        loop
        muted
        playsInline  /* Asegura que el video funcione bien en dispositivos móviles */
      >
        <source src="/video/fondo-pc.mp4" type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>

    </div>
  );
}

export default VideoBackground;
