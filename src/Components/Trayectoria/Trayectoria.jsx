import React from 'react';
import "./trayectoria.css";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

function Trayectoria() {
    return (
      <Tab.Container id="left-tabs-example" defaultActiveKey="first" className="timeline-containter">
        <h1 className='title'>Trayectoria</h1>
        <Row className='timeline' style={{marginLeft:60,  marginRight:70, marginTop:50, marginBottom:50}}>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">2010</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">2011 - 2013</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">2014</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth">2017 - 2018</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fifth">2019</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="sixth">2020</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="seventh">2021</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first"><p>Fitz Roy S.R.L nace en el año 2010 en la ciudad de Caleta Olivia con el claro propósito de convertirse en uno de los principales referentes del sector. Desde su constitución, hemos considerado la necesidad de diferenciar a la organización por medio de la incorporación de modernas técnicas de gestión y una clara orientación al cliente.
              Nuestras primeras obras, al igual que las actuales, se han caracterizado por la calidad de los materiales, el sentido estético de la obra, innovación y compromiso, pensando siempre en satisfacer al cliente. 
              En el año 2010 Fitz Roy Construcciones inicia la construcción de viviendas con sistema Royal House llave en mano, tales como la ubicada en Patagonia 271, Caleta Olivia.</p>
              <div className='pictures'>
                <img src="../../../public/Data/Images/image1.jpg" alt="" />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="second"><p>En el lapso comprendido entre 2011 y 2013 iniciamos una transformación con obras que fueron creciendo en complejidad, volumen, superficie y sentido estético, transformación que acompañó el crecimiento de todos los profesionales que integran la organización. Esto nos permitió Integrar nuevas áreas de actividad y diversificarnos en nuestros negocios
            Con el desafío de continuar brindando soluciones, logramos expandir nuestro radio de acción y se comenzó a gestionar de forma estratégica la elección de los lugares donde se emplazarían nuestras obras. Fue de esta manera que comenzamos a intervenir no solo en puntos estratégicos de la ciudad sino también en otras localidades.
            En el año 2011, construye oficina para Distrigas S.A. en Jaramillo, localidad al sur de nuestro establecimiento comercial.</p>
            <div className='pictures'>
            <img src="../../../public/Data/Images/image2.jpg" alt="" />
            <img src="../../../public/Data/Images/image2.2.jpg" alt="" />
            <img src="../../../public/Data/Images/image2.3.jpg" alt="" />
            <img src="../../../public/Data/Images/image2.4.jpg" alt="" />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="third"><p>En el año 2014, fabricación de trailers con ejes montantes y lanza de giro, trabajos de soldaduras generales, preparación y montaje de tinglados en la zona industrial de Caleta Olivia.</p>
            <div className='pictures'>
              <img src="../../../public/Data/Images/image3.jpg" alt="" />
              <img src="../../../public/Data/Images/image3.2.jpg" alt="" />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="fourth"><p>Se construyeron 4 duplex en el barrio Vista Hermosa.</p>
            <div className='pictures'>
            <img src="../../../public/Data/Images/image4.jpg" alt="" />
            <img src="../../../public/Data/Images/image4.2.jpg" alt="" />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="fifth"><p>Se construye Edificio de 3 pisos, con dos locales, 5 departamentos de categoría.</p>
            <div className='pictures'>
              <img src="../../../public/Data/Images/image5.jpg" alt="" />
              <img src="../../../public/Data/Images/image5.2.jpg" alt="" />
              <img src="../../../public/Data/Images/image5.3.jpg" alt="" />
              <img src="../../../public/Data/Images/image5.4.jpg" alt="" />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="sixth"><p>Se construye Nave industrial de 1000 m2 sobre la Av. Mitre, acceso sur Oeste de la ciudad.</p>
            <div className='pictures'>
              <img src="../../../public/Data/Images/image6.jpg" alt="" />
              <img src="../../../public/Data/Images/image6.2.jpg" alt="" />
              <img src="../../../public/Data/Images/image6.3.jpg" alt="" />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="seventh"><p>Se construye Casa Cerro Heim 100.</p>
            <div className='pictures'>
              <img src="../../../public/Data/Images/image7.jpg" alt="" />
              <img src="../../../public/Data/Images/image7.2.jpg" alt="" />
              </div>
            </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
  }
  
  export default Trayectoria;