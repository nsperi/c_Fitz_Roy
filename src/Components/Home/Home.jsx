import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import "./home.css"

const Home = () => {
    return (
        <div className="container">
            <div className="b">
                <div className="image"><img src="../../../public/Data/Images/construction-site-monochromatic.png" alt="imagen principal" /></div>
                <div className="title"><img src="../../../public/Data/Images/PHOTO-2022-01-23-15-25-33 - copia.jpg" alt="titulo" /></div>
                <div className="text"><h1>Construimos en Caleta Olivia y zona norte de Santa Cruz.
                  Conocenos personalmente para mostrarte nuestras obras.</h1>
    
                </div>
                
            </div>
        </div>
      
    );
};

export default Home;