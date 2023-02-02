import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './context/cart-context';
import { LoginProvider } from './context/LoginContext';
import { Router } from './router/Router';



function App() {

  return (
    <LoginProvider>
    <CartProvider>
      <Router/>
    </CartProvider>
    </LoginProvider>
  );
}

export default App;
