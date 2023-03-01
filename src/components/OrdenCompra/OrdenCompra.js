import { useCartContext } from '../../Context/CartContext'
import { getFirestore, collection, addDoc, updateDoc, doc} from "firebase/firestore"
import { Button } from 'react-bootstrap'
//import { Button } from 'react-bootstrap'

const OrdenCompra = ({ dataForm }) => {

  //let articulo = {}

  const { cartList, vaciarCarrito, totalCarro } = useCartContext()

  function OrdenCompra() {
    const db = getFirestore()

    cartList.forEach((art) => {  
      const queryItem = doc(db, "articulos", `${art.id}`)
      updateDoc(queryItem, { stock: (art.stock - art.cantidad)})
    })

    let orden = {}
    //datos comprador
    orden.buyer = { nombre: `${dataForm.nombre}`, phone: `${dataForm.phone}`, email: `${dataForm.email} ` }
    console.log("objeto en orden de compra " + orden.buyer.nombre)

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
      .then(resp => console.log(resp))
      .catch(err => console.log(err))
      .finally(() => vaciarCarrito())
  }


  return (
    <div>
      <Button onClick={() => OrdenCompra()}>Confirmar Pedido</Button>
      {/* {OrdenCompra()} */}


    </div>
  )

}


export default OrdenCompra