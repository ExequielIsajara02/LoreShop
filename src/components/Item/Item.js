import React from "react";

const Item = ({name, price}) => {
    return(
        <div>
            <p>Name: {name}</p>
            <p>Price: {price}</p>
        </div>
    )
}

export default Item