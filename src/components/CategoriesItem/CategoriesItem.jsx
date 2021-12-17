import React from "react";


const CategoriesItem = ({name, pictureUrl}) => {


    return(
        <div>
            <h2>{name}</h2>
            <img src={pictureUrl} />
        </div>
    )
}

export default CategoriesItem