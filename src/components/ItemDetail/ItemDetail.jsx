import React,  {useState} from  "react";
import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({title, description, price, img, stock, id}) => {

    const [amount, setAmount] = useState(0)
    const [itemCart, setItemCart] = useState({
        id: id,
        name: title,
        quantity: 0
    })

    const onCart = (value) => {
        console.log("El valor del item es " + value)
        itemCart.quantity = value
    }

    const sendItem = () => {
        console.log("El objeto es: ", itemCart)
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