import React, {useState} from "react";
import { useContext } from "react";
import ProductsContext from "../../../context/CartContext/CartContext";
import { Link } from "react-router-dom";
import './CartPage.css'

const CartPage = () => {

    const {products, total, removeAllProducts, removeProduct} = useContext(ProductsContext)
    

    return(
        <div>
            <h2>Pagina de carrito</h2>
            {
                <>
                {products.length === 0 ? 
                <div>
                    <p>No hay productos</p>
                </div>
                :
                products.map((product) => {
                    return(
                        <div key={product.id} className="cart-list-product">
                            <img src={product.img} className="product-image"/>
                            <p>{product.name}</p>
                            <p>$ {product.price}</p>
                            <span>Cant: {product.quantity}</span>
                            <button className="remove-product" onClick={removeProduct}>Eliminar producto</button>
                        </div>
                    )
                })}
                <div className="finally-buy">
                    <div className="total">
                        <p>Total</p>
                        <span>${total}</span>
                    </div>
                    {total > 0 && <button onClick={removeAllProducts}>Confirmar compra</button>}
                </div>
                
                </>
            }
        </div>
    )
}

export default CartPage