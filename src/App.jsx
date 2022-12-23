import React from "react";
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import Home from "./pages/Home/Home.jsx";
import Cadastro from "./pages/Cadastro/Cadastro.jsx";
import Login from "./pages/Login/Login.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastro" exact element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
