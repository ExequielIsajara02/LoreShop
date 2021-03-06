import React from "react";
import { Link } from "react-router-dom";
import './ModalCart.css'
import images from "../../assets/images";

const ModalCart = ({products, total}) => {

    


    return (
        <div className="container-product">
            {
                <>
                {products.length === 0 ? 
                <div className="no-products">
                    <p className="not-products">No hay productos</p>
                    <Link to={'/'} style={{'textDecoration' : 'none'}}>
                        <p className="more-products">Ver más productos</p>
                    </Link>
                </div>
                :
                products.map((product) => {
                    return(
                        <div key={product.id} className="product">
                            <img src={images[product.img]} className="cart-image" alt='product'/>
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
