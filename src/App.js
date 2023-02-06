
//import ItemCount from "./components/ItemCount/ItemCount";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/Navbar/Navbar";
import './App.css';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {

  const parrafo = "Aprovecha el mejor servicio de envio a domicilio"
  //const stock = 5
 // const initial = 1

  /*function onAdd(count, cant) {
    if (count <= cant) {
      console.log("funcion on add "+count)
    }
  }*/

  return (
    <div className="App">      
      <NavBar />       
      <ItemListContainer greeting={parrafo} />  
      <ItemDetailContainer/>    
      {/* <ItemCount stock={stock} initial={initial} onAdd={onAdd} /> */}
    </div>
  );
};

export default App;
