import React from "react";
import './CategoriesBanner.css'

const CategoriesBanner = ({price, img}) => {
    return(
        <div>
           <p>{price}</p>
           <img src={img} className="banner-img"/>
        </div>
    )
}

export default CategoriesBanner