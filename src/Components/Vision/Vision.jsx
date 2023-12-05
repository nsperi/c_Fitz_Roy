import React, { memo } from 'react';
import "./vision.css"

const Vision = memo(() => {
    return (
        <div>
            <h1 className='title'>Visión</h1>
            <div className='container'>
                <p>Nuestra visión consiste en ser reconocidos como una organización líder de la región; a través de la generación de proyectos, negocios y soluciones integrales para nuestros clientes. 
                Queremos ser uno de los protagonistas de la actividad empresarial, manteniendo siempre nuestro serio compromiso con el desarrollo del país, la comunidad, y el respeto al medioambiente.
                Aspiramos día a día a obtener la excelencia en el trabajo, ser una empresa en continua evolución, que trascienda y genere valores sólidos y resultados de carácter ético y sostenible.
                </p>
                <img src="../../../public/Data/Images/vision.png" alt="" />
            </div>
        </div>
    );
});

export default Vision;