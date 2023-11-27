
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Bio from './Components/Bio/Bio';
import Cv from './Components/Cv/Cv';
import Proyectos from './Components/Proyectos/Proyectos';
import TO from './Components/ToTheTop/ToTheTop';
import SEIS from './Components/6000/6000';
import Footer from './Components/Footer/Footer'

function App() {
  

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/bio" element={<Bio/>}/>
      <Route path="/cv" element={<Cv/>}/>
      <Route path="/proyectos" element={<Proyectos/>}/>
      <Route path="/toTheTop" element={<TO/>}/>
      <Route path="/seis" element={<SEIS/>}/>
      </Routes>
      <Footer/>
      
   </BrowserRouter>
  )
}

export default App
