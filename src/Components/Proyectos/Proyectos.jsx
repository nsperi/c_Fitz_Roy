import React, { useState, useEffect } from 'react';
import "./proyectos.css"


const Proyectos = () => {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/public/data/proyectos.json');
        const data = await response.json();
        setProyectos(data);
      } catch (error) {
        console.error('Error fetching proyectos:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      <h1 className='title'>Proyectos</h1>
      <h4 className='subtitle'>Con más de 13 años de antigüedad, estamos convencidos en que seremos uno de los principales referentes del sector. Fitz Roy Construcciones lleva edificados significativos mt2 en casas, dúplex, locales, oficinas y tinglados implementando distintos sistemas de construcción, brindado servicios generales y soluciones ajustadas a las necesidades de cada cliente desde el inicio de nuestra actividad.</h4>  
      <div className='card-container'>
        {proyectos.length > 0 ? (
            proyectos.map((proyecto) => (
            <div key={proyecto.id} className='proyect-card'>
                <h2>{proyecto.nombre}</h2>
                <img src={proyecto.img} alt={proyecto.nombre} />
                <p>{proyecto.descripcion}</p>
            </div>
            ))
        ) : (
            <p>Cargando proyectos...</p>
        )}
      </div>

    </div>

      
  );
};

export default Proyectos;
