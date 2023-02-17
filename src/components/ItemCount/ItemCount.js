import { useState } from 'react'
//import { useCartContext } from '../../Context/CartContext';
import './ItemCount.css';

function ItemCount({stock, initial, onAdd}) {    
    //const [cant, setCant] = useState(stock);
    const [count, setCount] = useState(initial);
   
    
    

   /* useEffect(() => {
        console.log(`El stock que queda de este articulo es de ${cant} unidades.`)
    }, [cant])*/

    function sumar() {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    function restar() {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    /*function mostrar() {
        if (count <= cant) {
            setCant(cant - count)
            onAdd(count); 
        } else {
            console.log("No hay suficiente cantidad para lo requerido")
        }
    }*/

    return (
        <div>
            <div className='fondoControl'>
                <button className='control' onClick={restar}>-</button>
                <span className='display'>{count}</span>
                <button className='control' onClick={sumar}>+</button>
            </div>
           
            {/* <button className='boton' onClick={() => {mostrar()}}>Agregar al carrito</button> */}
            <button className='boton' onClick={() => {onAdd(count)}}>Agregar al carrito</button>
        </div>
    );
};

export default ItemCount