import React from 'react';
import "./propuesta.css"

const Propuesta = () => {
    return (
        <div className='propuesta'>
            <h1 className='title'>Nuestra propuesta</h1>
            <div className='subtitle'>
                <h2 >SISTEMA LLAVE EN MANO AMPLIO</h2>
                <h3>Su principal ventaja radica en la seguridad que ofrece:</h3>
            </div>
            <div className='card-container'>
                <div className='card'>
                    <h4>Contrato en pesos</h4>
                    <img src="../../../public/Data/Images/prop2.png" alt="" />
                    <p>Elaboración de un presupuesto cerrado y consensuado con el cliente. A través del proyecto y la elección de materiales de construcción y terminación.</p>
                </div>
                <div className='card'>
                    <h4>Plazo de obra</h4>
                    <img src="../../../public/Data/Images/prop3.png" alt="" />
                    <p>Estipulado contractualmente entre 8 y 10 meses de acuerdo a los m2 a construir.</p>
                </div>
                <div className='card'>
                    <h4>Calidad reconocida</h4>
                    <img src="../../../public/Data/Images/prop4.png" alt="" />
                    <p>Manejamos una garantía estructural de 10 años y de un año para los servicios de instalación (Ejemplo: bombas, calderas, etcétera). Además, recorreremos las obras ejecutadas, y en ejecución, para que usted pueda  apreciar nuestra calidad en forma  palpable y tangible.</p>
                </div>
            </div>

        </div>
    );
};

export default Propuesta;