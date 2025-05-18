// src/App.js
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart";
import { CartProvider } from "./Context/CartContext";

function App() {
  return (
    <CartProvider>
      <h1>🛒 Simple Cart App</h1>
      <ProductList />
      <Cart />
    </CartProvider>
  );
}

export default App;
