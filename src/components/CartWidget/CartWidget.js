import React from 'react'
import { BiCartAlt } from "react-icons/bi";
import { Link } from 'react-router-dom';
import './CartWidget.css';
import { useCartContext } from '../../Context/CartContext'

function CartWidget() {

  const { cartList } = useCartContext()

  if (cartList.length > 0) {

    return (
      <div className='carrito'>
        <p className='circulo'>{(cartList.map((producto => producto.cantidad))).reduce((acumulador, elemento) => acumulador + elemento, 0)}</p>
        <Link to="/carrito"><h1 ><BiCartAlt className='simboloCarrito' /></h1></Link>
      </div>
    )
  }
  return (
    <div>
      <Link to="/carrito"><h1 ><BiCartAlt className='simboloCarrito' /></h1></Link>
    </div>

  )

}

export default CartWidget
