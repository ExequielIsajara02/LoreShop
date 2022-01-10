import React, { useContext, useState } from 'react';
import './CartWidget.css'
import ProductsContext from '../../context/CartContext/CartContext';
import ModalCart from '../ModalCart/ModalCart';

const CartWidget = () => {

    const { products, total } = useContext(ProductsContext)
    
    const [show, setShow] = useState(true);

    const showCart = () => {
        setShow(!show)
    }

    console.log("Productos agregados desde el carrito: ", products)

    return(
        <div className="cart-container">
            <div onClick={showCart}>
                <img className="car-icon" alt="cart-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAATlJREFUSEvN1MFNwzAUgOHfqBJHGCFMQNkAJoAzNSLcknCgbAAT0AtxbgTVnIENYALKBMAElCNSJSNTqqYQEqdpEL4++31+frYFDQ/RcH7+EAil+apmCCJF9Y8XUd20gikwzmvYItF3dZGfRxR2uiDOMOaW5Gpn8UDXX+V99DquorVGkj7XQfKbHMoU2K+ReIDSG3Z9PhDttjFLDzWAF5T2fgdsJJQDYH0uRHBKrE+KgWjPx5iLuYBM74ofWiiHwEpF5B6lNydrioFA9hAcVQKEOCDu20vyOUoA30OMnioAbyy3PHqprdwBsFOCzg1CbDsilyjtZ+eWf3ahtK/52gnI+V7KAfcr+4jS7e8bcQOctp8/yQ0I5DmCCENMog9nUhXFSm/RJFP2K1d6dlNFMWeg8Qoa78F/Bj4ARHJgGUiRL5AAAAAASUVORK5CYII="/>
            </div>
            {show && <ModalCart products={products} total={total}></ModalCart>}
        </div>
    )
}

export default CartWidget;