
//import React from 'react'
//import ItemListContainer from '../ItemListContainer/ItemListContainer'

const articulos = [
    {id:"1", categoria:"marcadores", descripcion:"Marcador al Agua x 10 Surtidos.", precio:450, foto:"/images/logo-Enlace-Util.jpg"},
    {id:"2", categoria:"adhesivos", descripcion:"Voligoma 30ml", precio:250, foto:"/images/logo-Enlace-Util.jpg"},
    {id:"3", categoria:"lapices", descripcion:"Lapiz Grafito HB", precio:43, foto:"/images/logo-Enlace-Util.jpg"}
]


//declaramos la función y la exportamos
export const getProductos = () => {
    // retornamos la nueva promesa
      return new Promise((res, rej) => {
    // con setTimeout simulamos una demora en la respuesta y le pasamos el array.
        setTimeout(() => {
          res(articulos);
          
        }, 2000);
      });
    }

    

