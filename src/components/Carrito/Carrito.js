import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext'
import FormularioCompra from '../FormularioCompra/FormularioCompra';
import "./Carrito.css";

const Carrito = () => {
  const { cartList, eliminarItem, vaciarCarrito, totalCarro } = useCartContext()

  if (cartList.length > 0) {
    return (
      <div>
        <h2 class="tituloCarro">Carrito de Compras.</h2>
        <table class="table" border="1" cellpading="0" cellspacing="0">
          <tr>
            <th className='celdaIndividual'>COD.</th>
            <th className='celdaIndividual'>DESCRIP.</th>
            <th className='celdaIndividual'>CANT.</th>
            <th className='celdaIndividual'>PRECIO</th>
            <th className='celdaIndividual'>SUBT.</th>
            <th className='celdaIndividual'></th>
          </tr>
        </table>
        {cartList.map(producto => <table class="table1" border="1" cellpading="0" cellspacing="0">
          <tr>
            <td className='celdaIndividual'> {producto.id}</td>
            <td className='celdaIndividual'> {producto.nombre}</td>
            <td className='celdaIndividual'> {producto.cantidad}</td>
            <td className='celdaIndividual'> ${producto.precio}</td>
            <td className='celdaIndividual'> ${producto.subtotal}</td>
            <td className='celdaIndividual'><Button onClick={() => { eliminarItem(producto.id) }}>Eliminar</Button></td>
          </tr>
        </table>
        )}
        <span className='letraTotal'>Total $ {totalCarro()}</span>
        <br></br>
        <Button onClick={() => { vaciarCarrito() }}>Vaciar Carrito</Button>
        <br /><br />
        <FormularioCompra />
        
        

      </div>
    )
  }

  return (
    <div>
      <h1>El carro esta vacio</h1>
      <Link to="/"><Button>Volver al catalogo</Button></Link>


    </div>
  )
}

export default Carrito
