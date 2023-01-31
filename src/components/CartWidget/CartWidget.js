import React from 'react'
import { BiCartAlt } from "react-icons/bi";
import './CartWidget.css';

function CartWidget() {
  return (
   <div className='carrito'>
        <p className='circulo'>1</p>
        <h1> <BiCartAlt /></h1>      
    </div>
  )
}

export default CartWidget
