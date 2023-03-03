import { useCartContext } from '../../Context/CartContext'
import { getFirestore, collection, addDoc, updateDoc, doc } from "firebase/firestore"
import { Button } from 'react-bootstrap'
import Swal from "sweetalert2"

const OrdenCompra = ({ dataForm }) => {  

  const { cartList, vaciarCarrito, totalCarro } = useCartContext()

  function OrdenCompra() {

    const db = getFirestore()

    cartList.forEach((art) => {
      const queryItem = doc(db, "articulos", `${art.id}`)
      updateDoc(queryItem, { stock: (art.stock - art.cantidad) })
    })

    let orden = {}

    //datos comprador
    orden.buyer = { nombre: `${dataForm.nombre}`, phone: `${dataForm.phone}`, email: `${dataForm.email} ` }    

    //productos del carro
    orden.items = cartList.map(cartItem => {
      const id = cartItem.id
      const nombre = cartItem.nombre
      const cantidad = cartItem.cantidad
      const precio = cartItem.precio
      const subtotal = cartItem.subtotal
      
      return { id, nombre, cantidad, precio, subtotal }
    })

    //Composicion de la Fecha
    const DIAS = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]
    const MESES = [
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
      "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
    ];
    let diaSemana = DIAS[(new Date()).getDay()];
    let diaMes = ((new Date()).getDate())
    let mes = MESES[(new Date()).getMonth()];
    let año = (new Date()).getFullYear();
    orden.date = ("Hoy es " + diaSemana + " " + diaMes + " de " + mes + " del " + año + ".")

    //Total del Carro.
    orden.total = totalCarro()

    //grabar orden de compra en firebase
    const queryCollection = collection(db, "orders")
    addDoc(queryCollection, orden)
      .then(resp => {
        Swal.fire({
          title: `Tu compra número: (${resp.id}) fue realizada con exito.`,                    
          width: 600,
          confirmButtonText: "Aceptar",
      });        
        vaciarCarrito()
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <Button onClick={() => OrdenCompra()}>Confirmar Pedido</Button>
    </div>
  )
}

export default OrdenCompra