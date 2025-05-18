// src/components/Cart.js
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

function Cart() {
    const { cart, removeFromCart } = useContext(CartContext);

    return (
        <div>
            <h2>🧺 Cart</h2>
            {cart.length === 0 && <p>Cart is empty.</p>}
            {cart.map((item) => (
                <div key={item.id}>
                    <p>
                        {item.name} - ${item.price}
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </p>
                </div>
            ))}
        </div>
    );
}

export default Cart;
