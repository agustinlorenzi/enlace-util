import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css";

const ItemDetail = ({ detalleProducto }) => {
  const { id, categoria, nombre, descripcion, stock, precio, foto } = detalleProducto;
  const onAdd = (cantidad) => {
    console.log(`Compraste ${cantidad} items`);
  };  

  console.log(categoria)
  return (
    <div className='itemDetail'  >
      <img src={foto} alt={descripcion} />
      <div>
        <h3 className='sacar'>{nombre}</h3>
        <p>Codigo: {id}.</p>
        <p>{descripcion}</p>
        <p>Stock: {stock}</p>
        <h3 className='sacar'>${precio}</h3>
        <ItemCount initial={1} stock={stock} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;
