
import { useEffect, useState } from 'react';
//import React, { useState, useEffect } from 'react';
import { getProductos } from '../Articulos/articulos';
//import ItemList from '../ItemList/ItemList';
import ItemList from '../ItemList/ItemList';
import "./ItemListContainer.css";


function ItemListContainer({ greeting }) {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProductos()
      .then(respuesta => setProductos(respuesta))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [])
  console.log("en itemlistcontainer " + productos)
  console.log(loading)

  return (
    <div>
      <p className='parrafo'>{greeting}</p>
      {/* <ul>{productos.map(producto => (<li key={producto.id}>{producto.descripcion}</li>))}</ul> */}
      {/* {loading ? <h2>Cargando . . .</h2> : productos.map((<ItemList/>)) } */}
      {/* {loading ? <h2>Cargando . . .</h2> : productos.map((prod => <li key={prod.id}>{prod.descripcion}</li>)) } */}
      <div className='control'>
        {loading ? <h2>Cargando . . .</h2> : productos.map((prod => <p key={prod.id}>{<ItemList prod={prod} />}</p>))}

      </div>



    </div>
  )

}

export default ItemListContainer