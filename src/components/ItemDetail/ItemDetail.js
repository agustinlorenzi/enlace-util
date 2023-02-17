import React, { useState } from 'react';
import { useCartContext } from '../../Context/CartContext';
import InputCount from '../InputCount/InputCount';
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css";
//import Swal from "sweetalert2"

const ItemDetail = ({ detalleProducto }) => {

  const { id, categoria, nombre, descripcion, stock, precio, foto } = detalleProducto;
  const [cantidadProducto, setCantidadProducto] = useState()
  const [inputType, SetInputType] = useState("button")

  const { addItem, cartList, faltaStock } = useCartContext()

  const onAdd = (cantidad) => {
    setCantidadProducto(cantidad)
    SetInputType("input")
    addItem({ ...detalleProducto, cantidad })

    /*let artBuscado = cartList.find((el) => el.nombre === nombre)
    if (cantidad <= (stock - artBuscado.cantidad)) {
      SetInputType("input")
      addItem({ ...detalleProducto, cantidad })

    } else {
      Swal.fire({
        title: "No alcanza el stock para el agregado requerido, pruebe con una cantidad menor.",
        //text: `Tu pedido ingreso correctamente. Te lo enviaremos a la brevedad a ${direccion}.`,
        width: 600,
        //icon: "success",
        confirmButtonText: "Aceptar",
      });*/

  }


  //};

  console.log(cartList)

  console.log(`Compraste ${cantidadProducto} unidades de este item`);

  return (
    <div className='itemDetail'  >
      <img src={foto} alt={descripcion} />
      <div>
        <h3 className='sacar'>{nombre}</h3>
        <p>Codigo: {id}</p>
        <p>{descripcion}</p>
        <p>Stock: {stock}</p>
        <h3 className='sacar'>${precio}</h3>
        <p>Categoria: {categoria}.</p>
        <span className='display'>{faltaStock}</span>
        {inputType === "button" ? <ItemCount initial={1} stock={stock} onAdd={onAdd} /> : <InputCount />}
      </div>
    </div>
  );
};

export default ItemDetail;

