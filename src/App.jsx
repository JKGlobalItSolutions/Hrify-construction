import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Footer from "./components/Footer";
import Projects from "./pages/projects";
import Infrastructure from "./pages/infrastruture";
import Clients from "./pages/client";
import About from "./pages/about";
import Designbuild from "./pages/Designbuild";
import Construction from "./pages/construction";
import Architectural from "./pages/Architectural";
import Interior from "./pages/Interior";
import StructuralDesign from "./pages/StructuralDesign";
import CivilStructural from "./pages/CivilStructural";
import PublicHealthEngineering from "./pages/PublicHealthEngineering";
import Fire from "./pages/Fire";
import Electrical from "./pages/Electrical";
import HVAC from "./pages/hvac";
import Green from "./pages/Green";
import Contact from "./pages/contact";

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch(currentPage) {
      case 'about':
        return <About />
      case 'projects':
        return <Projects />
      case 'infrastructure':
        return <Infrastructure />
      case 'client':
        return <Clients />
      case 'designbuild':
        return <Designbuild />
  case 'Construction':
        return <Construction />


      case 'architectural':
        return <Architectural />
      case 'interior':
        return <Interior />
      case 'structuralDesign':
        return <StructuralDesign />
      case 'civilstructural':
        return <CivilStructural />
      case 'publichealth':
        return <PublicHealthEngineering />
      case 'fire':
        return <Fire />
      case 'electrical':
        return <Electrical />
      case 'hvac':
        return <HVAC />
      case 'green':
        return <Green />
      case 'contact':
        return <Contact />
      case 'home':
      default:
        return <Home />
    }
  }

  return (
    <>
      <Navbar onNavigate={setCurrentPage} />
      {renderPage()}
      <Footer />    
    </>
  )
}

export default App
