import React from "react";
import ItemCount from '../ItemCount/ItemCount';

const Item = ({name, price, stock}) => {
    return(
        <div>
            <p>Name: {name}</p>
            <p>Price: {price}</p>
            <p>Stock: {stock}</p>
            <ItemCount stock={stock}></ItemCount>
        </div>
    )
}

export default Item