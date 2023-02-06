
const articulos = [
  { id: "1", categoria: "marcadoresEspeciales", nombre: "Mi Primer Marcador x 10 Surtidos.", descripcion: "El primer marcador de punta redondeada para niños.", stock: 5, precio: 450, foto: "/images/MiPrimerMarcadorx10Surtido.jpg" },
  { id: "2", categoria: "marcadoresdePizarra", nombre: "Marcador de Pizarra Negro Pizzini.",descripcion:"De alto rendimiento, llena muchas pizarras y estudia a full con el mismo marcador.", stock:12,precio:500,foto:"/images/MarcadordePizarra.jpg"},
  {id:"3",categoria:"marcadoresPermanentes",nombre:"Marcador Permanente Negro Pizzini.",descripcion:"Trazos Fuertes y Claron para un marcado contundente y excepcional.",stock:8,precio: 375.82,foto:"/images/MarcadorPermanenteNegro.jpg"},
  {id:"4",categoria:"adhesivos",nombre:"Notas Autoadhesivas Pizzini.",descripcion:"Notas Fluo Autoadhesivas para ayudarte a recordar y resaltar tus actividades en tus agenda y heladera.",stock:6,precio:155.36,foto:"/images/NotasAutoadhesivasFluo.jpg"},
  { id: "5", categoria: "adhesivos", nombre: "AdhesivoSinteticoPizzini",descripcion:"Transparente con bolita esparcidora para una correcta utilizacion del pegamento.",stock:6, precio: 250, foto: "/images/AdhesivoSinteticoPïzzini.jpg" },
  {id:"6",categoria:"adhesivos",nombre:"Cinta Transparente 12x30mts",descripcion:"Rollo pequeñito y practico pero de alto metraje para encintar todo lo que te hace falta.",stock:12,precio:55,foto:"/images/Cinta12x30.jpg"},
  { id: "7", categoria: "lapices", nombre: "Lapiz Grafito HB", descripcion:"Lapices Sabonis con goma incluida clasicos para tu cartuchera y para una escritura agradable.",stock:15,precio: 43, foto: "/images/lapizGrafitoHB.jpg" },
  {id:"8",categoria:"resaltadores",nombre:"Resaltador Pizzini Lila.",descripcion:"De alta duración y permite distintos espesores de trazos en color lila sobre todos tus apuntes.",stock:12,precio:205.1,foto:"/images/ResaltadorLila.jpg"},

]


//declaramos la función y la exportamos
export const getProductos = () => {
  // retornamos la nueva promesa
  return new Promise((res, rej) => {
    // con setTimeout simulamos una demora en la respuesta y le pasamos el array.
    setTimeout(() => {
      res(articulos);
    }, 2000);
  });
}



