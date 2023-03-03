import { createContext, useContext, useState } from "react"
import Swal from "sweetalert2"

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])
   
    function addItem(item) {        
        let existe = cartList.some((prod) => prod.nombre === item.nombre)
        if (existe === false) {
            setCartList([...cartList, item])
        } else {
            let artBuscado = cartList.find((el) => el.nombre === item.nombre)            
            if (item.cantidad <= (item.stock - artBuscado.cantidad)) {
                artBuscado.cantidad = artBuscado.cantidad + item.cantidad
                artBuscado.subtotal = artBuscado.subtotal + item.subtotal
            } else {
                Swal.fire({
                    title: "No alcanza el stock para el agregado requerido, pruebe con una cantidad menor.",                    
                    width: 600,
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

    function totalCarro(){
        return cartList.map((producto => producto.subtotal)).reduce((acumulador, elemento) => acumulador + elemento, 0)
    }    

    return (
        <CartContext.Provider value={{ cartList, addItem, eliminarItem, vaciarCarrito, totalCarro}}>           
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider

