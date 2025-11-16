// src/components/Contacto/Contacto.jsx
import React, { useState } from "react";
import Nav from "../Nav/Nav";
import styles from "./Contacto.module.css";

const Contacto = () => {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    celular: "",
    comentario: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías integrar tu servicio de envío de correo
    console.log("Formulario enviado:", form);
    alert("¡Formulario enviado!");
    setForm({ nombre: "", email: "", celular: "", comentario: "" });
  };

  return (
    <>
      <Nav />

      <div className={styles.contactoContainer}>
        <header className={styles.headerRow}>
          <div className={styles.headerText}>
            <h1 className={styles.title}>Contáctanos</h1>
            <p className={styles.lead}>
              Completa el formulario y nos pondremos en contacto contigo a la brevedad.
            </p>
          </div>
          <div className={styles.imageWrap}>
            <img
              src="/img/dragon-contacto.png"
              alt="Dragón contacto"
              className={styles.titleImage}
            />
          </div>
        </header>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Correo electrónico:
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Celular (opcional):
            <input
              type="tel"
              name="celular"
              value={form.celular}
              onChange={handleChange}
            />
          </label>

          <label>
            Comentario:
            <textarea
              name="comentario"
              value={form.comentario}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit" className={styles.btn}>
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};

export default Contacto;
