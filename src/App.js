import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/Navbar/navbar';
import { Footer } from './components/Footer/footer';
import { CartWidget } from "./components/CartWidget/CartWidget";
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <Navbar>
        <CartWidget/>
      </Navbar>
      <ItemListContainer greeting="Bienvenidos a Pegasus Gaming!" />
      <Footer />
    </div>
  );
}

export default App;
