import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/Navbar/Navbar";
import './App.css';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Carrito from "./components/Carrito/Carrito";
import CartContextProvider from "./Context/CartContext";

function App() {

  const parrafo = "Aprovecha el mejor servicio de envio a domicilio."

  return (
    <BrowserRouter>
      <CartContextProvider>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={parrafo} />} />
            <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
            <Route path="/categoria/:categoriaId" element={<ItemListContainer greeting={parrafo} />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/*" element={<Navigate to="/" />} />

          </Routes>
        </div>
      </CartContextProvider>
    </BrowserRouter >
  );
};

export default App;
