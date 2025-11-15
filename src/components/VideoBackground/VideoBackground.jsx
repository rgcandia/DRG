import styles from './VideoBackground.module.css';

const VideoBackground = () => {
  return (
    <div className={styles.videoContainer}>
      <video
        className={styles.video}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video/video-fondo.mp4" type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>
    </div>
  );
};

export default VideoBackground;
