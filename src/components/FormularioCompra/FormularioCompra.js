import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import OrdenCompra from '../OrdenCompra/OrdenCompra'

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
                <div>
                    <h2>Por Favor complete sus datos de contacto.</h2>
                    <br></br>
                    <input type="text" name="nombre" value={dataForm.nombre} onChange={tomarInput} placeholder="nombre" />
                    <br></br>
                    <input type="number" name="phone" value={dataForm.phone} onChange={tomarInput} placeholder="telefono" />
                    <br></br>
                    <input type="text" name="email" value={dataForm.email} onChange={tomarInput} placeholder="email" />
                    <br></br>
                    {aviso}
                    <br></br>
                    <Button onClick={()=>corroborarDatos()}>Confirmar Datos</Button>
                </div> :
                <OrdenCompra dataForm={dataForm}/>                
            }
        </div>        
    )
}

export default FormularioCompra

