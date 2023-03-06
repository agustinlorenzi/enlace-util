import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext'
import FormularioCompra from '../FormularioCompra/FormularioCompra';
import ItemCart from '../ItemCart/ItemCart';
import "./Carrito.css";

const Carrito = () => {

  const { cartList } = useCartContext()

  if (cartList.length > 0) {
    return (
      <div>
        <ItemCart />
        <FormularioCompra />
      </div>
    )
  }

  return (
    <div className='carritoVacio'>
      <h1>El carro esta vacio.</h1>
      <br></br>
      <Link to="/"><Button>Volver al catalogo</Button></Link>
    </div>
  )
}

export default Carrito
