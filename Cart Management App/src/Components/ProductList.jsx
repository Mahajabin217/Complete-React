// src/components/ProductList.js
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Headphone", price: 200 },
    { id: 3, name: "Keyboard", price: 150 },
];

function ProductList() {
    const { addToCart } = useContext(CartContext);

    return (
        <div>
            <h2>Products</h2>
            {products.map((product) => (
                <div key={product.id}>
                    <p>
                        {product.name} - ${product.price}
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </p>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
