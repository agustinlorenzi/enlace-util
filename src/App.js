
import './App.css';
import ItemCount from './components/ItemCount/ItemCount';
import Menu from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import ItemCount from '/components/ItemCount';
//import ItemListContainer from './components/ItemListContainer';
//import Menu from './components/Navbar';

function App() {

  const parrafo = "Aprovecha el mejor servicio de envio a domicilio"
  const stock = 5
  const initial = 1

  function onAdd(count, cant) {
    if (cant > 0) {
      console.log(count)
    }

  }

  return (
    <div className="App">
      
      <Menu />
       
      <ItemListContainer greeting={parrafo} />      
      <ItemCount stock={stock} initial={initial} onAdd={onAdd} />
    </div>
  );
};



export default App;
