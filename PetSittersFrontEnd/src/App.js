import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cuidadores from "./components/Cuidadores";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Registro from "./components/Registro";
import DetalleCuidador from "./components/DetalleCuidador";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuidadores" element={<Cuidadores />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/detallecuidador" element={<DetalleCuidador />} />
        <Route path="*" element={<div>404 NOT FOUND</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
