import React, { useState } from 'react';
import "./nuestrafilosofia.css";

const NuestraFilosofia = () => {
  const [selected, setSelected] = useState(null);

  const handleAccordionClick = (index) => {
    setSelected(index === selected ? null : index);
  };

  return (
    <div>
      <h1 className='title'>Nuestra filosofía</h1>
      <div className='icons'>
        <img src="../../../public/Data/Images/nf1.png" alt="" />
        <img src="../../../public/Data/Images/nf2.png" alt="" />
        <img src="../../../public/Data/Images/nf3.png" alt="" />
      </div>
    
      <div className="accordion">
        <input type="radio" name="select" className="accordion-select" checked={selected === 0} onClick={() => handleAccordionClick(0)} />
        <div className="accordion-title"><span>Gestión de residuos</span></div>
        <div className={`accordion-content ${selected === 0 ? 'open' : ''}`}>
          <p className='text'>
            <h1>GESTIÓN DE RESIDUOS</h1>
            <p>Nuestro propósito es poder transmitirle a todo el personal de Riva los pasos a seguir para garantizar un proceso de gestión de residuos eficiente y controlado (con la identificación, recolección, manejo, clasificación, almacenamiento, traslado, transporte y disposición final). Asimismo, nos aseguramos que los procesos cumplan con las normas y especificaciones vigentes. Nuestra meta es lograr que el cuidado por el ambiente sea un hábito tanto en la construcción, como posteriormente, en los hogares de nuestro equipo de trabajo.</p>
          </p>
        </div>
        
        <input type="radio" name="select" className="accordion-select" checked={selected === 1} onClick={() => handleAccordionClick(1)} />
        <div className="accordion-title"><span>Medio ambiente</span></div>
        <div className={`accordion-content ${selected === 1 ? 'open' : ''}`}>
          <p className='text'>
            <h1>RESPETO POR EL MEDIO AMBIENTE</h1>
            <h2>Política</h2>
            <p>Comprometidos a proteger el medio ambiente en todas las etapas de la obra, nos hemos alineado a los planes y procedimientos de gestión ambiental bajo la norma ISO 14001.
            Asumimos el compromiso de trabajar en armonía con el medio ambiente, garantizando las condiciones adecuadas para el desarrollo de las generaciones futuras a través de los siguientes objetivos:
            Minimizar los impactos ambientales adversos.
            Actuar de acuerdo a la legislación vigente en materia de Medio Ambiente.
            Minimizar la generación de residuos de cualquier naturaleza, asegurando una gestión responsable y segura. Dar prioridad, siempre que sea posible, a reutilizar y reciclar materiales.
            Capacitar a nuestros empleados y subcontratistas en todos los niveles, para que desarrollen sus actividades manteniendo los estándares de calidad sin producir impactos negativos al ambiente.
            Promover la comunicación interna y externa, con nuestros clientes, la comunidad, autoridades legales o cualquier otra organización interesada en lo referente a nuestro desempeño ambiental
            Realizar auditorías ambientales periódicas, para determinar el progreso hacia el mejoramiento continuo.
            </p>
          </p>
        </div>

        <input type="radio" name="select" className="accordion-select" checked={selected === 2} onClick={() => handleAccordionClick(2)} />
        <div className="accordion-title"><span>Nuestra filosofía</span></div>
        <div className={`accordion-content ${selected === 2 ? 'open' : ''}`}>
          <p className='text'>
            <h1>NUESTRA FILOSOFÍA</h1>
            ❝La calidad es nuestro principal objetivo y permanente preocupación.
            <br/>
            El compromiso tomado es compromiso cumplido.
            <br/>
            La ética en los negocios es nuestra fortaleza corporativa.
            <br/>
            La innovación en métodos y tecnologías es esencial para el éxito de nuestros proyectos.
            <br/>
            La prevención de riesgos y el resguardo de la integridad de las personas es prioridad en nuestro trabajo.
            <br/>
            El respeto por el medioambiente es una conducta permanente.
            <br/>
            La sólida posición financiera nos permite proyectar con grandes expectativas el futuro y dar seguridad a nuestros clientes.❞
          </p>
        </div>
      </div>
    </div>
  );
};

export default NuestraFilosofia;
