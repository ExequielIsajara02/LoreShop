import React from "react";

const CategoriesBanner = ({name, img}) => {
    return(
        <div>
           <h2>{name}</h2>
           <img src={img} />
        </div>
    )
}

export default CategoriesBanner