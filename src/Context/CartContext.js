import { createContext, useContext, useState } from "react"
import Swal from "sweetalert2"
//import ItemDetail from "../components/ItemDetail/ItemDetail"
//import { Link } from 'react-router-dom';

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)



const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])
    //const [faltaStock, setFaltaStock] = useState("")


    let faltaStock = ""

    function addItem(item) {        
        let existe = cartList.some((prod) => prod.nombre === item.nombre)
        if (existe === false) {
            setCartList([...cartList, item])
        } else {
            let artBuscado = cartList.find((el) => el.nombre === item.nombre)
            //artBuscado.cantidad = artBuscado.cantidad + item.cantidad
            if (item.cantidad <= (item.stock - artBuscado.cantidad)) {

                artBuscado.cantidad = artBuscado.cantidad + item.cantidad
                artBuscado.subtotal = artBuscado.subtotal + item.subtotal
            } else {
                Swal.fire({
                    title: "No alcanza el stock para el agregado requerido, pruebe con una cantidad menor.",
                    //text: `Tu pedido ingreso correctamente. Te lo enviaremos a la brevedad a ${direccion}.`,
                    width: 600,
                    //icon: "success",
                    confirmButtonText: "Aceptar",
                });
            }
        }
    }

    function eliminarItem(id) {
        setCartList(cartList.filter(prod => prod.id !== id))
    }

    function vaciarCarrito() {
        setCartList([])
    }

    //var index = lproducts.map(producto => producto.nombre).indexOf("Manzana")

    //nombres.splice(1, 2)

    return (
        <CartContext.Provider value={{ cartList, addItem, eliminarItem, vaciarCarrito, faltaStock }}>
            {children}
        </CartContext.Provider>

    )
}

export default CartContextProvider

