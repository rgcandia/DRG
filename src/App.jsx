import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from './components/Loader/Loader'; // Importa tu componente de Loader

function App() {
  const [loading, setLoading] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Función para precargar el video
  useEffect(() => {
    const preloadVideo = () => {
      const video = document.createElement('video'); // Crea un elemento video
      video.src = '/video/fondo-pc.mp4'; // Ruta del video a precargar
      video.preload = 'auto'; // Establece la propiedad preload a 'auto'
      
      video.oncanplaythrough = () => {
        setVideoLoaded(true); // Cuando el video esté completamente cargado, actualiza el estado
      };
      
      video.load(); // Inicia la carga del video
    };

    preloadVideo();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Después de la simulación de carga, termina
    }, 3000); // Simula la carga durante 3 segundos
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading || !videoLoaded ? (
        <Loader /> // Muestra el loader si el video no está cargado o la simulación no ha terminado
      ) : (
        <Outlet /> // Muestra las rutas cuando ya esté todo cargado
      )}
    </div>
  );
}

export default App;
