import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollTop from "./components/ScrollTop";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Details from "./pages/Details";
import "./App.css";

function App() {
  return (
    <div className="app">

      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </div>   
    <div className="scrollsize" ><ScrollTop className="icon" /> </div>      
    </div>
  );
}

export default App;