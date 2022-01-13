import React, {useState} from "react";
import { useContext } from "react";
import ProductsContext from "../../../context/CartContext/CartContext";
import { Link } from "react-router-dom";
import images from "../../../assets/images";
import './CartPage.css'
import ContactModal from "../../ContactModal/ContactModal";

const CartPage = () => {

    const [open, setOpen] = useState(false)

    const modalFormOpen = () => {
        setOpen(true)
    }
    const modalFormClose = () => {
        setOpen(false)
    }

    const {products, total, removeAllProductsInCart, removeProductInCart} = useContext(ProductsContext)
    
    

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
                            <img src={images[product.img]} className="product-image"/>
                            <p>{product.name}</p>
                            <p>$ {product.price}</p>
                            <span>Cant: {product.quantity}</span>
                            <button className="remove-product-btn" onClick={() => removeProductInCart(product)}>Eliminar producto</button>
                        </div>
                    )
                })}
                <div className="finally-buy">
                    <div className="total">
                        <p>Total</p>
                        <span>${total}</span>
                    </div>
                    {total > 0 && <button onClick={modalFormOpen}>Confirmar compra</button>}
                </div>
                </>
            }
            <ContactModal formOpen={open} formClose={modalFormClose} formProducts={products} totalPrice={total}></ContactModal>
        </div>
    )
}

export default CartPage