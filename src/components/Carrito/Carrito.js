import React from 'react'
import { Button } from 'react-bootstrap'
import { useCartContext } from '../../Context/CartContext'

const Carrito = () => {
  const { cartList, eliminarItem,vaciarCarrito } = useCartContext()

  return (
    <div>
      {cartList.map(producto => <li>{producto.nombre} - {producto.cantidad} unidades - Precio Unitario $ {producto.precio} - Subtotal ${(producto.precio) * (producto.cantidad)}<Button onClick={() => {eliminarItem(producto.id)}}>Eliminar</Button></li>)}
      <Button onClick={() => {vaciarCarrito()}}>Vaciar Carrito</Button>
    </div>
  )
}

export default Carrito
