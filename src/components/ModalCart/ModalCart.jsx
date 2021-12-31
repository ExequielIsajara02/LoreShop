import React from "react";
import { Link } from "react-router-dom";
import './ModalCart.css'

const ModalCart = ({products, total}) => {

    


    return (
        <div className="container-product">
            {
                <>
                {products.length === 0 ? 
                <div>
                    <p>No hay productos</p>
                    <Link to={'/'}>
                        <p>Ver mas productos</p>
                    </Link>
                </div>
                :
                products.map((product) => {
                    return(
                        <div key={product.id} className="product">
                            <img src={product.img} className="cart-image"/>
                            <p>$ {product.price}</p>
                            <span>Cant: {product.quantity}</span>
                        </div>
                    )
                })}
                <div className="finally-buy">
                    <div className="total">
                        <p>Total</p>
                        <span>${total}</span>
                    </div>
                    {total > 0 && <Link to={'/cart'}><button>Ver carrito</button></Link>}
                </div>
                </>
            }
        </div>
    )
}

export default ModalCart
