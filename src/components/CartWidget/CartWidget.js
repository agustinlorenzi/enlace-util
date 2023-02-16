import React from 'react'
import { BiCartAlt } from "react-icons/bi";
import { Link } from 'react-router-dom';
import './CartWidget.css';

function CartWidget() {
  return (
   <div className='carrito'>
        <p className='circulo'>1</p>
        <Link to="/carrito"><h1 ><BiCartAlt className='simboloCarrito'/></h1></Link>      
    </div>
  )
}

export default CartWidget
