
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Menu from './components/Navbar';


function App() {
  //const [count, setCount] = useState(0)
  const parrafo = "Aprovecha el mejor Servicio de entrega de articulos de Libreria a Domicilio."

  return (
    <div className="App">
      <Menu />
      <ItemListContainer greeting={parrafo} />
    </div>
  );
}

export default App;
