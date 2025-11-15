import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from './components/Loader/Loader';

function App() {
  const [loading, setLoading] = useState(true); 
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [ready, setReady] = useState(false);

  // Precargar video
  useEffect(() => {
    const video = document.createElement("video");
    video.src = "/video/fondo.mp4";
    video.preload = "auto";

    video.oncanplaythrough = () => {
      setVideoLoaded(true);
    };

    video.load();
  }, []);

  // Cuando Loader termine + video cargado → mostrar Home
  useEffect(() => {
    if (!loading && videoLoaded) {
      setReady(true);
    }
  }, [loading, videoLoaded]);



  return (
    <div>
      {!ready ? (
        <Loader onLoaded={() => setLoading(false)} />
      ) : (
        <Outlet />
      )}
    </div>
  );
}

export default App;
