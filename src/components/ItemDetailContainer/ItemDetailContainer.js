import { doc, getDoc, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loader from '../Loader/Loader';
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
    const [detalleProducto, setDetalleProducto] = useState({});
    const { detalleId } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const dbQuery = doc(db, "articulos", `${detalleId}`)
        getDoc(dbQuery)
        .then(resp => setDetalleProducto({ id: resp.id, ...resp.data()}))
        .catch((err) => console.log(err))
    }, [detalleId]);    

    return (
        <div className='acomodarDetalle'>
            {detalleProducto.id ? <ItemDetail detalleProducto={detalleProducto} /> : <Loader />}
        </div>
    );
};

export default ItemDetailContainer;