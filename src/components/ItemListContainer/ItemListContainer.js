import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//import { getProductos } from '../Articulos/articulos';
import ItemList from '../ItemList/ItemList';
import Loader from '../Loader/Loader';
import "./ItemListContainer.css";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"

/*doc, getDoc,*/

function ItemListContainer({ greeting }) {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoriaId } = useParams()

  useEffect(() => {
    const db = getFirestore()
    if (categoriaId) {
      //const db = getFirestore()
      const queryCollection = collection(db, "articulos")
      const queryCollectionFilter = query(queryCollection, where("categoria", "==", `${categoriaId}`))
      getDocs(queryCollectionFilter)
        .then(resp => setProductos(resp.docs.map(articulo => ({ id: articulo.id, ...articulo.data() }))))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    } else {
      //const db = getFirestore()
      const queryCollection = collection(db, "articulos")
      getDocs(queryCollection)
        .then(resp => setProductos(resp.docs.map(articulo => ({ id: articulo.id, ...articulo.data() }))))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    }
  }, [categoriaId])

  /*useEffect(() => {
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
  }, [categoriaId]) */

  return (
    <div className='fondo'>
      <p className='parrafo'>{greeting}</p>
      <div className='control'>
        {loading ? <Loader /> : productos.map((prod => <p key={prod.id}>{<ItemList prod={prod} />}</p>))}
      </div>
    </div>
  )
}

export default ItemListContainer