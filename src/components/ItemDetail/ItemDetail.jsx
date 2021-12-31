import React,  {useContext, useState, useEffect} from  "react";
import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount";
import ProductsContext from "../../context/CartContext/CartContext";
import { useParams } from "react-router-dom";

const ItemDetail = ({title, description, price, img, stock, id}) => {

    const { addProducts, products} = useContext(ProductsContext)


    const [itemCart, setItemCart] = useState({
        id: id,
        name: title,
        price: price,
        img: img,
        stock: stock,
        quantity: 0
    })

    const onCart = (value) => {
        console.log("El valor del item es " + value)
        itemCart.quantity = value
    }

    const sendItem = () => {
        addProducts(itemCart)
        console.log("Productos agregados: ", products)
    }


    return(
        <div className="detail-container">
            <img src={img} className="detail-image"/>
            <div className="detail-text">
                <p>Price: {price}</p>
                <p>{title}</p>
                <p>{description}</p>
                <ItemCount stock={stock} onCart={onCart} sendItem={sendItem}></ItemCount>
            </div>
        </div>
    )
}

export default ItemDetail