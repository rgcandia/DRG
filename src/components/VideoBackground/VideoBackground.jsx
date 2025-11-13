
import styles from './VideoBackground.module.css'; 
const VideoBackground = () => {
  return (
    <div className={styles.videoContainer}>
      <video 
        className={styles.videoBackground}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video/fondo-pc.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoBackground;
