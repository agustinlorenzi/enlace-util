import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductos } from '../Articulos/articulos';
import ItemList from '../ItemList/ItemList';
import "./ItemListContainer.css";

function ItemListContainer({ greeting }) {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoriaId } = useParams()

  useEffect(() => {
    if (categoriaId) {
      getProductos()
        .then(respuesta => setProductos(respuesta.filter((prods) => prods.categoria === categoriaId)))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    } else {
      getProductos()
        .then(respuesta => setProductos(respuesta))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    }
  }, [categoriaId]) 

  return (
    <div className='fondo'>
      <p className='parrafo'>{greeting}</p>      
      <div className='control'>
        {loading ? <h2>Cargando . . .</h2> : productos.map((prod => <p key={prod.id}>{<ItemList prod={prod} />}</p>))}
      </div>
    </div>
  )
}

export default ItemListContainer