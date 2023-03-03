import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../Context/CartContext'
import "./ItemCart.css";

const ItemCart = () => {
    const { cartList, eliminarItem, vaciarCarrito, totalCarro } = useCartContext()
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
            <td className='celdaIndividualCodigo'> {producto.id}</td>
            <td className='celdaIndividual'> {producto.nombre}</td>
            <td className='celdaIndividual'> {producto.cantidad}</td>
            <td className='celdaIndividual'> ${producto.precio}</td>
            <td className='celdaIndividual'> ${producto.subtotal}</td>
            <td className='celdaIndividual'><button onClick={() => { eliminarItem(producto.id) }}>X</button></td>
          </tr>
        </table>
        )}
        <span className='letraTotal'>Total $ {totalCarro()}</span>
        <br></br>
        <Link to="/"><Button>Seguir Comprando</Button></Link>
        <br></br>
        <br></br>
        <button onClick={() => { vaciarCarrito() }}>Vaciar Carrito</button>
    </div>
  )
}

export default ItemCart