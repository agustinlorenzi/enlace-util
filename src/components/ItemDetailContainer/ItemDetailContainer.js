import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductos } from '../Articulos/articulos';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loader from '../Loader/Loader';
import "./ItemDetailContainer.css";


const ItemDetailContainer = () => {    
    const [detalleProducto, setDetalleProducto] = useState({});
    const { detalleId } = useParams()    

    useEffect(() => {
        getProductos()
            .then((res) => setDetalleProducto(res.find((item) => item.id === detalleId)))
            .catch((error) => console.log(error))
    }, [detalleId]);

    return (
        <div className='acomodarDetalle'>
            {detalleProducto.id ? <ItemDetail detalleProducto={detalleProducto} /> : <Loader />}            
        </div>
    );
};

export default ItemDetailContainer;