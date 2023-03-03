import { useState } from 'react'
import './ItemCount.css';

function ItemCount({stock, initial, onAdd}) {      
    const [count, setCount] = useState(initial);

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

    if(stock > 0){
        return (
            <div>
                <div className='fondoControl'>
                    <button className='control' onClick={restar}>-</button>
                    <span className='display'>{count}</span>
                    <button className='control' onClick={sumar}>+</button>
                </div>          
                <button className='boton' onClick={() => {onAdd(count)}}>Agregar al carrito</button>
            </div>
        );

    }
    
    return(
        <div>
            <h3>No hay Stock de este producto.</h3>
        </div>
    )    
};

export default ItemCount