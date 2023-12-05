import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopBar from "./Components/TopBar/TopBar"
import Home from "./Components/Home/Home"
import QueHacemos from "./Components/QueHacemos/QueHacemos"
import Trayectoria from "./Components/Trayectoria/Trayectoria"
import Vision from './Components/Vision/Vision'
import Mision from './Components/Mision/Mision'
import NuestraFilosofia from './Components/NuestraFilosofia/NuestraFilosofia'
import Proyectos from './Components/Proyectos/Proyectos'
import Propuesta from './Components/Propuesta/Propuesta'
import Footer from "./Components/Footer/Footer"
import NavBar from "./Components/NavBar/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
        <BrowserRouter>
        
          <TopBar/>   
          <NavBar links/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/quehacemos" element={<QueHacemos/>}/>
            <Route path="/trayectoria" element={<Trayectoria/>}/>
            <Route path="/vision" element={<Vision/>}/>
            <Route path="/mision" element={<Mision/>}/>
            <Route path="/nuestrafilosofia" element={<NuestraFilosofia/>}/>
            <Route path="/proyectos" element={<Proyectos/>} />
            <Route path="/propuesta" element={<Propuesta/>}/>
          </Routes>
          <Footer/>

        </BrowserRouter>

      
    </>
  )
}

export default App
