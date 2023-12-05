import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './topbar.css';

const TopBar = () => {
    return (
     
            <div className='topbar'>
                <ul className='bar'>
                    <li className='bar-item'>
                        <a className= 'bar-link' href="http://www.facebook.com/fitzroyconstructora"><FontAwesomeIcon icon={faFacebookF} size='lg' style={{color: "#2074e8",}} /></a>
                    </li>
                    <li className='bar-item'>
                        <a className= 'bar-link' href="http://www.instagram.com/fitzroyconstructora"><FontAwesomeIcon icon={faInstagram} size='lg' style={{color: "#2074e8",}} /></a>
                    </li>
                    <li className='bar-item'>
                        <a className= 'bar-link' href="mailto:info@fitzroyconstructora.com"><FontAwesomeIcon icon={faEnvelope} size='lg' style={{color: "#2074e8",}} /> info@fitzroyconstructora.com</a>
                    </li>
                    <li className='bar-item'>
                        <a className= 'bar-link' href="#"><FontAwesomeIcon icon={faLocationDot} size='lg' style={{color: "#2074e8",}} /> Av. Independencia 331 1piso of 1</a>
                    </li>
                    <li className='bar-item'>
                        <a className= 'bar-link' href="tel:+5492974096772"><FontAwesomeIcon icon={faWhatsapp} size='lg' style={{color: "#2074e8",}} /> +549 297 409 6772</a>
                    </li>
                </ul>
            </div>
   
    );
};

export default TopBar;
