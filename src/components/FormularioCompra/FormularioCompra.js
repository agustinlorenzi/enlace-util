import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
//import { useCartContext } from '../../Context/CartContext'
import OrdenCompra from '../OrdenCompra/OrdenCompra'

const FormularioCompra = () => {
    // const { } = useCartContext()
    const [dataForm, setDataForm] = useState({ nombre: "", phone: "", email: "" })
    const[aviso,setAviso] = useState("")
    

    const tomarInput = (e) => {
        console.log("toma la funcion")
        setDataForm({ ...dataForm, [e.target.name]: e.target.value })
        console.log(e.target.name)
        console.log(e.target.value)
    }
    console.log("ver este console" + dataForm.nombre)
    
    function corroborarDatos() {        
        console.log("se activa funcion corroborar")        
        if (dataForm.nombre === "") {
            setAviso("completar nombre")
        } else if (dataForm.phone === "") {
            setAviso ("completar telefono")
        } else if (dataForm.email === "") {
            setAviso ("completar email")
        } else {
            setAviso("datos completos") 

            // vaciarCarrito()
        }
    }

    return (
        <div>
            <div>
                <input type="text" name="nombre" value={dataForm.nombre} onChange={tomarInput} placeholder="nombre" />
                <br></br>
                <input type="number" name="phone" value={dataForm.phone} onChange={tomarInput} placeholder="telefono" />
                <br></br>
                <input type="text" name="email" value={dataForm.email} onChange={tomarInput} placeholder="email" />
            </div>
            <br></br>
            {aviso}
            <Button onClick={()=>corroborarDatos()}>Confirmar Pedido</Button>
            {aviso === "datos completos" ? <OrdenCompra dataForm={dataForm}/> : null}
            {/* <button className='boton' onClick={() => { onAdd(count, cant); mostrar() }}>Agregar al carrito</button> */}
        </div>
    )
}

export default FormularioCompra