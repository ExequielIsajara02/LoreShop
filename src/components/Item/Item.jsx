import React from 'react';
import { Link } from 'react-router-dom'


const Item = ({title, price, img, id}) => {
    return(
        <div className="itemList-container">
            <div>
                <img src={img} alt={title} className="img-product"/>
                <p>Price: {price}</p>
                <Link to={`/item/${id}`} style={{textDecoration: 'none', fontSize: '20px', color: '#00695c'}}>
                    <p className='more-btn'>Ver más</p>
                </Link>
            </div>
        </div>
    )
}

export default Item