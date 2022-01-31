import React,  {useContext, useState, useEffect} from  "react";
import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount";
import ProductsContext from "../../context/CartContext/CartContext";
import images from "../../assets/images";


const ItemDetail = ({id, title, price, img, stock, description}) => {

    const { addProductsInCart} = useContext(ProductsContext)


    const [itemCart, setItemCart] = useState()

    const productsCart = {
        id: id,
        name: title,
        price: price,
        img: img,
        stock: stock,
        quantity: 0
    }

    
    const onCart = (value) => {
        itemCart.quantity = value
    }

    const sendItem = () => {
        addProductsInCart(itemCart)
        
    }

    useEffect(() => {
        setItemCart(productsCart)
    }, [])

    


    return(
        <div className="detail-container">
            <img src={images[img]} alt={title} className="detail-image"/>
            <div className="detail-text">
                <p>Price: ${price}</p>
                <p>Category: {title}</p>
                <p>Description: {description}</p>
                <ItemCount stock={stock} onCart={onCart} sendItem={sendItem}></ItemCount>
            </div>
        </div>
    )
}

export default ItemDetail