import { useEffect, useState } from 'react'
import './ItemCount.css';


function ItemCount({ stock, initial, onAdd }) {
    const [count, setCount] = useState(initial);
    const [cant, setCant] = useState(stock);

    useEffect(() => {
        console.log("el stock es " + cant)
    }, [cant])

    function sumar() {
        if (count < cant) {
            setCount(count + 1)
        }
    }

    function restar() {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    function mostrar() {
        if (count <= cant) {
            setCant(cant - count)
        } else {
            console.log("No hay suficiente cantidad para lo requerido")
        }
    }

    return (
        <div>
            <div className='fondoControl'>
                <button className='control' onClick={restar}>-</button>
                <span className='display'>{count}</span>
                <button className='control' onClick={sumar}>+</button>
            </div>
            <button className='boton' onClick={() => { onAdd(count, cant); mostrar() }}>Agregar al carrito</button>
        </div>
    );
};


export default ItemCount