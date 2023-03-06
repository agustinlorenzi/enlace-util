import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import OrdenCompra from '../OrdenCompra/OrdenCompra'
import "./FormularioCompra.css";

const FormularioCompra = () => {    
    const [dataForm, setDataForm] = useState({ nombre: "", phone: "", email: "" })
    const [aviso, setAviso] = useState("")
    const [input, setInput] = useState("button")

    const tomarInput = (e) => {        
        setDataForm({ ...dataForm, [e.target.name]: e.target.value })         
    }   

    function corroborarDatos() {        
        if (dataForm.nombre === "") {
            setAviso("completar nombre")
        } else if (dataForm.phone === "") {
            setAviso("completar telefono")
        } else if (dataForm.email === "") {
            setAviso("completar email")
        } else {
            setAviso("datos completos")
            setInput("otracosa")
        }
    }

    return (
        <div>
            {input === "button" ?
                <div className='inputFormulario'>
                    <h2>Por Favor complete sus datos de contacto.</h2>                    
                    <input className='inputF' type="text" name="nombre" value={dataForm.nombre} onChange={tomarInput} placeholder="Nombre Completo" />
                    <br></br>
                    <input className='inputF' type="number" name="phone" value={dataForm.phone} onChange={tomarInput} placeholder="Telefono" />
                    <br></br>
                    <input className='inputF' type="text" name="email" value={dataForm.email} onChange={tomarInput} placeholder="Email" />
                    <br></br>
                    {aviso}
                    <br></br>
                    <Button className='botonFormulario' onClick={()=>corroborarDatos()}>Confirmar Datos</Button>
                </div> :
                <OrdenCompra dataForm={dataForm}/>                
            }
        </div>        
    )
}

export default FormularioCompra

