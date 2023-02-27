import React from 'react'
import { Button } from 'react-bootstrap'
import { useCartContext } from '../../Context/CartContext'

const OrdenCompra = ({dataForm}) => {

  const {vaciarCarrito } = useCartContext()

  let orden = {}
  orden.buyer = { nombre : `${dataForm.nombre}` , phone : `${dataForm.phone}`,email:`${dataForm.email} `}

  console.log("objeto en orden de compra " + orden)
  
  return (
    <div>
      <h1>OrdenCompra</h1>
      <Button onClick={() => { vaciarCarrito() }}>Vaciar Carrito</Button>


    </div>
  )
}

export default OrdenCompra