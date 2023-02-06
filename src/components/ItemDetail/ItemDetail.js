import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
//import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ detalleProducto }) => {
  const {id,categoria,descripcion,precio,stock,foto} = detalleProducto;
  const onAdd = (cantidad) => {
    console.log(`Compraste ${cantidad} items`);
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '3rem',
      }}
    >
      <h2>Detalle de: {descripcion}</h2>
      <h3>Detalle de: {id}</h3>
      <img src={foto} alt={descripcion} style={{ width: '25rem' }} />
      <p>{categoria}</p>
      <p>${precio}</p>
      <ItemCount initial={1} stock={stock} onAdd={onAdd}/>

      {/* <ItemCount initial={1} stock={stock} onAdd={onAdd} /> */}
    </div>
  );
};

export default ItemDetail;
