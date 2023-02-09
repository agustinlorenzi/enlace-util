import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/Navbar/Navbar";
import './App.css';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {

  const parrafo = "Aprovecha el mejor servicio de envio a domicilio."

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={parrafo} />}/>
          <Route path="/detalle/:detalleId" element={<ItemDetailContainer />}/>
          <Route path="/categoria/:categoriaId" element={<ItemListContainer greeting={parrafo} />}/>
          <Route path="/*" element={<Navigate to="/" />}/>
        </Routes>
      </div>
    </BrowserRouter >
  );
};

export default App;
