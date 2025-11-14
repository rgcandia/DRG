import React, { useState, useEffect } from "react";
import styles from './TextOverlay.module.css'; // Importa el CSS del componente

const TextOverlay = () => {
  const messages = [
    "Bienvenido a DRG Soporte Técnico",
    "Ofrecemos promociones especiales",
    "Contáctanos para más información",
    "Reparación rápida y eficiente"
  ];

  const [currentMessage, setCurrentMessage] = useState(messages[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage(prev => {
        const currentIndex = messages.indexOf(prev);
        return messages[(currentIndex + 1) % messages.length];
      });
    }, 5000); // Cambia el texto cada 5 segundos

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
  }, [messages]);

  return (
    <div className={styles.textOverlay}>
      <p className={styles.text}>{currentMessage}</p>
    </div>
  );
}

export default TextOverlay;
