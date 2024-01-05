import React, { useState } from 'react';
import './contacto.css'; 

function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    consulta: '',
  });

  const [formVisible, setFormVisible] = useState(false);

  const toggleForm = () => {
    setFormVisible(!formVisible);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Agregar lógica para manejar el envío del formulario
    console.log('Formulario enviado:', formData);
  };

  return (
    <div className="contact-form-container">
      <button onClick={toggleForm} className="toggle-button">
        {formVisible ? 'Ocultar Formulario' : 'CONTACTANOS'}
      </button>

      {formVisible && (
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />

          <label htmlFor="telefono">Teléfono:</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="consulta">Consulta:</label>
          <textarea
            id="consulta"
            name="consulta"
            value={formData.consulta}
            onChange={handleChange}
            maxLength="300"
          ></textarea>

          <input type="submit" value="Enviar" />
        </form>
      )}
    </div>
  );
}

export default ContactForm;