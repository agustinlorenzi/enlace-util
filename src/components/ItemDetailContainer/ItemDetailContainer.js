import React, { useEffect, useState } from 'react';
import { getProductos } from '../Articulos/articulos';
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = () => {
    const [detalleProducto, setDetalleProducto] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProductos()
            .then((res) => setDetalleProducto(res.find((item) => item.id === "2")))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div>
            {loading ? <h2>Cargando . . .</h2> : <ItemDetail detalleProducto={detalleProducto} />}
        </div>
    );
};

export default ItemDetailContainer;