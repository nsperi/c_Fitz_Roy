import React from 'react';
import ContactForm from '../Contacto/Contacto';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="map">
          <div class="mapouter"><div class="gmap_canvas"><iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=avenida independencia 331, caleta olivia&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>
        </div>
        <div className="info">
          <div className="text-container">
            <p>Fitz Roy S.R.L</p>
            <p>C.U.I.T.: 30-71133499-4</p>
            <p>Construcción, logística y servicios generales para la industria minera y petrolera</p>
            <p>Av. Independencia 331 1piso of 1</p>
            <p>+549 297 4096772</p>
            <p>info@fitzroyconstructora.com</p>
          </div>
        </div>
        <div className="contact">
          <div>
            <ContactForm/>
          </div>
        </div>
      </div>
      <p>Copyright Company Name © 2023. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

