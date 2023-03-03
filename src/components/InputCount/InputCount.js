import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './InputCount.css';

const InputCount = () => {

    return (
        <div>
            <Link to="/"><Button>Seguir Comprando</Button></Link>
            <Link to={`/carrito`}><Button className='boton'>Terminar Compra</Button></Link>
        </div>
    )
}

export default InputCount