import React from "react";
import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({title, description, price, img, stock}) => {


    return(
        <div className="detail-container">
            <img src={img} className="detail-image"/>
            <div className="detail-text">
                <p>Price: {price}</p>
                <p>{title}</p>
                <p>{description}</p>
                <ItemCount stock={stock}></ItemCount>
            </div>
        </div>
    )
}

export default ItemDetail