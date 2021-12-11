import React from "react";
import './ItemDetail.css'

const ItemDetail = ({data}) => {
    return(
        <div className="detail-container">
            <img src={data.pictureUrl} />
            <div className="detail-text">
                <p>{data.price}</p>
                <p>{data.name}</p>
                <p>{data.description}</p>
                <button className="btn-buy">Comprar ahora</button>
            </div>
        </div>
    )
}

export default ItemDetail