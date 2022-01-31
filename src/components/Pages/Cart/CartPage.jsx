import React, {useState} from "react";
import { useContext } from "react";
import ProductsContext from "../../../context/CartContext/CartContext";
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

    const {products, total, removeProductInCart} = useContext(ProductsContext)
    
    

    return(
        <div className="cartPage-content">
            <h2>Carrito</h2>
            {
                <>
                {products.length === 0 ? 
                <div className="noProducts">
                    <p>No hay productos</p>
                </div>
                :
                products.map((product) => {
                    return(
                        <div key={product.id} className="cart-list-product">
                            <img src={images[product.img]} className="product-image" alt="cart-list-product"/>
                            <div className="cart-list-product__text">
                                <p>{product.name}</p>
                                <p>$ {product.price}</p>
                                <p>Cant: {product.quantity}</p>
                                <button className="remove-product-btn" onClick={() => removeProductInCart(product)}>Eliminar</button>
                            </div>
                        </div>
                    )
                })}
                <div className="confirm-buy">
                    <div className="total">
                        <p>Total</p>
                        <span>${total}</span>
                    </div>
                    {total > 0 && <button onClick={modalFormOpen} className="confirm-btn">Confirmar compra</button>}
                </div>
                </>
            }
            <ContactModal formOpen={open} formClose={modalFormClose} formProducts={products} totalPrice={total}></ContactModal>
        </div>
    )
}

export default CartPage