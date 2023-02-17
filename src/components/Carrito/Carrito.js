import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext'
import "./Carrito.css";

const Carrito = () => {
  const { cartList, eliminarItem, vaciarCarrito } = useCartContext()

  if (cartList.length > 0) {
    return (
      <div>
        <h2 class="tituloCarro">Carrito de Compras.</h2>
        <table class="table" border="1" cellpading="0" cellspacing="0">
          <tr>
            <th>COD.</th>
            <th>DESCRIP.</th>
            <th>CANT.</th>
            <th>PRECIO</th>
            <th>SUBT.</th>
            <th></th>
          </tr>
        </table>
        {cartList.map(producto => <table class="table1" border="1" cellpading="20" cellspacing="0">
          <tr>
            <td> {producto.id}</td>
            <td> {producto.nombre}</td>
            <td> {producto.cantidad}</td>
            <td> ${producto.precio}</td>
            <td> ${(producto.precio) * (producto.cantidad)}</td>
            <td><Button onClick={() => { eliminarItem(producto.id) }}>Eliminar</Button></td>
          </tr>
        </table>
        )}


        <Button onClick={() => { vaciarCarrito() }}>Vaciar Carrito</Button>
      </div>
    )
  } else {
    return (
      <div>
        <h1>El carro esta vacio</h1>
        <Link to="/"><Button>Volver al catalogo</Button></Link>

      </div>

    )
  }

}



export default Carrito
//{inputType === "button" ? <ItemCount initial={1} stock={stock} onAdd={onAdd} /> : <InputCount />}
//const total = numeros.reduce((acumulador , elemento) => acumulador + elemento, 0)

//<li>{producto.nombre} - {producto.cantidad} unidades - Precio Unitario $ {producto.precio} - Subtotal ${(producto.precio) * (producto.cantidad)}<Button onClick={() => {eliminarItem(producto.id)}}>Eliminar</Button></li>