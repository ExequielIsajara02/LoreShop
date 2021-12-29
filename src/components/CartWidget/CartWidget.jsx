import React, { useContext } from 'react';
import './CartWidget.css'
import ProductsContext from '../../context/CartContext/CartContext';

const CartWidget = (key) => {

    const { products } = useContext(ProductsContext)

    

    return(
        <div className="car-container">
            <div>
                <img className="car-icon" alt="cart-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAATlJREFUSEvN1MFNwzAUgOHfqBJHGCFMQNkAJoAzNSLcknCgbAAT0AtxbgTVnIENYALKBMAElCNSJSNTqqYQEqdpEL4++31+frYFDQ/RcH7+EAil+apmCCJF9Y8XUd20gikwzmvYItF3dZGfRxR2uiDOMOaW5Gpn8UDXX+V99DquorVGkj7XQfKbHMoU2K+ReIDSG3Z9PhDttjFLDzWAF5T2fgdsJJQDYH0uRHBKrE+KgWjPx5iLuYBM74ofWiiHwEpF5B6lNydrioFA9hAcVQKEOCDu20vyOUoA30OMnioAbyy3PHqprdwBsFOCzg1CbDsilyjtZ+eWf3ahtK/52gnI+V7KAfcr+4jS7e8bcQOctp8/yQ0I5DmCCENMog9nUhXFSm/RJFP2K1d6dlNFMWeg8Qoa78F/Bj4ARHJgGUiRL5AAAAAASUVORK5CYII="/>
            </div>
           {
                products.map((product) => {
                    return(
                        <div className='item-list-cart' key={product.id}>
                            <p>{product.name}</p>
                            <p>{product.price}</p>
                            <span>Cant: {product.quantity}</span>
                        </div>
                    )
                })
           }
        </div>
    )
}

export default CartWidget;