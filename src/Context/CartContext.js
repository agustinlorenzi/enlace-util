import {createContext, useContext, useState} from "react"


const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)



const CartContextProvider=({children})=>{

    const[cartList,setCartList]=useState([])

    function addItem(item){ 
        let existe = cartList.some((prod)=>prod.nombre === item.nombre)        
        if(existe === false){
            setCartList([...cartList,item])
        }else{
            let artBuscado = cartList.find((el)=>el.nombre === item.nombre)
            artBuscado.cantidad = artBuscado.cantidad + item.cantidad
        }         
    }    

    function eliminarItem(id){
        setCartList(cartList.filter( prod => prod.id !== id ))           
    }

    function vaciarCarrito(){
        setCartList([])
    }

    //var index = lproducts.map(producto => producto.nombre).indexOf("Manzana")

    //nombres.splice(1, 2)

    return(
        <CartContext.Provider value={{cartList,addItem,eliminarItem,vaciarCarrito}}>
            {children}
        </CartContext.Provider>
        
    )
}

export default CartContextProvider

