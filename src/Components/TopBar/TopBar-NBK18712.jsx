import React from 'react';
import "./nav.css";
import Container from 'react-bootstrap/Container';

const Nav = () => {
    return (
        <header>
            <div className='topbar'>
                <ul className='nav'>
                    <li className='navitem'>
                        <a className= 'navlink' href="http://www.facebook.com/fitzroyconstructora"><i className="fa-brands fa-facebook"></i></a>
                    </li>
                    <li className='navitem'>
                        <a className= 'navlink' href="http://www.instagram.com/fitzroyconstructora">Instagram</a>
                    </li>
                    <li className='navitem'>
                        <a className= 'navlink' href="mailto:info@fitzroyconstructora.com">info@fitzroyconstructora.com</a>
                    </li>
                    <li className='navitem'>
                        <a className= 'navlink' href="#">Av. Independencia 331 1piso of 1</a>
                    </li>
                    <li className='navitem'>
                        <a className= 'navlink' href="tel:+5492974096772">+549 297 409 6772</a>
                    </li>
                </ul>
            </div>

            <div className='navbar'>
                <ul className='container-navbar'>
                    <li className='navbar-item'><img src="../../../public/Data/Images/PHOTO-2022-01-23-15-25-32.jpg" alt="Logo" /></li>
                    <li className='navbar-item'>
                        <a href="" className='navbar-link'>Nosotros</a>
                    </li>
                    <li className='navbar-item'><a href="" className='navbar-link'>Proyectos</a ></li>
                    <li className='navbar-item'><a href="" className='navbar-link'>Nuestra Propuesta</a></li>
                </ul>
            </div>
        </header>
    );
};

export default Nav;
