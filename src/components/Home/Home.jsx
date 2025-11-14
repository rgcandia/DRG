import styles from './Home.module.css';
import Nav from '../Nav/Nav';
import VideoBackground from '../VideoBackground/VideoBackground';

export default function Home () {
  return (
    <div className={styles.homeContainer}>
      <Nav />
      <VideoBackground/>

  
      <a
        href="https://wa.me/5491156191204"
        className={styles.wafloat}
        target="_blank"
        rel="noopener"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
        />
      </a>
    </div>
  );
}
