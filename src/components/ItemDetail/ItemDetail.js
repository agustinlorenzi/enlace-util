import React, { useState } from 'react';
import { useCartContext } from '../../Context/CartContext';
import InputCount from '../InputCount/InputCount';
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css";

const ItemDetail = ({ detalleProducto }) => {

  const { id, categoria, nombre, descripcion, stock, precio, foto } = detalleProducto;
  const [cantidadProducto, setCantidadProducto] = useState()
  const [inputType, SetInputType] = useState("button")

  const{addItem,cartList}=useCartContext()

  const onAdd = (cantidad) => {     
    setCantidadProducto(cantidad)
    SetInputType("input")
    addItem({...detalleProducto,cantidad})
    
  };

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
        {inputType === "button" ? <ItemCount initial={1} stock={stock} onAdd={onAdd} /> : <InputCount />}                  
      </div>
    </div>
  );
};

export default ItemDetail;

