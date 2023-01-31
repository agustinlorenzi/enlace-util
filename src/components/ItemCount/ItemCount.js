import { useEffect, useState } from 'react'
import './ItemCount.css';
import Card from 'react-bootstrap/Card';

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
        if (cant > 0) {
            setCant(cant - count)
        } else {
            console.log("No hay suficiente cantidad para lo requerido")
        }
    }

    return (
        <div className='separacionCard'>
            <Card style={{ width: '18rem' }}>
                <Card.Img className='imagenCard' variant="top" src="/images/logo-Enlace-Util.jpg" />
                <Card.Body className='fondoCard'>
                    <Card.Title>Marcador x 10 surtidos</Card.Title>
                    <Card.Text>$150.43</Card.Text>                    
                    <div className='fondoControl'>
                        <button className='control' onClick={restar}>-</button>
                        <span className='display'>{count}</span>
                        <button className='control' onClick={sumar}>+</button>
                    </div>
                    <div className='fondoControl' >
                    <button className='boton' onClick={() => { onAdd(count, cant); mostrar() }}>Agregar al carrito</button>

                    </div>
                    
                </Card.Body>
            </Card>
        </div>
    );
};


export default ItemCount