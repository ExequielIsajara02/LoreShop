import React from "react";
import './CategoriesBanner.css'
import { Link } from "react-router-dom";
import images from "../../assets/images";

const CategoriesBanner = ({price, img, id}) => {
    return(
        <div className="category-container">
            <div className="category">
                <img src={images[img]} className="banner-img" alt="imagen-anime"/>
                <p>Price: ${price}</p>
                <Link to={`/item/${id}`} style={{'textDecoration' : 'none'}}><p className="show-more">Ver más</p></Link>
            </div>
        </div>
    )
}

export default CategoriesBanner