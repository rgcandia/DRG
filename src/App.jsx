import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from './components/Loader/Loader'; // Importa tu componente de Loader

function App() {
  const [loading, setLoading] = useState(true);

  // Simulación de carga de datos (puedes reemplazarla por una lógica real)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Simula que terminó la carga
    }, 3000); // Simula una carga de 3 segundos
    return () => clearTimeout(timer);
  }, []);

  return (
    <div >
      {loading ? (
       
          <Loader /> 
        
      ) : (
        <Outlet /> // Muestra las rutas cuando ya no esté cargando
      )}
    </div>
  );
}

export default App;
