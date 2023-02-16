/*import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'

const InputCount = () => {
    return(
        <div>
        <Link to={`/carrito`}><Button variant="primary">Terminar Compra</Button></Link>
    </div> 

    )
     
}

const Intercambiabilidad = () => {
    const[inputType,SetInputType]=useState("button")

    const cambiar =()=>{
        SetInputType("input")
    }

    return(
        <div>
            {
                inputType === "button" ?
                <ItemCount cambiar={cambiar}/>
                :
                <InputCount/>
            }
        </div>
    )
}



export default Intercambiabilidad*/