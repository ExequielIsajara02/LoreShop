import React from 'react';
import { Link } from 'react-router-dom'
import './Item.css'
import images from '../../assets/images';


const Item = ({data}) => {
    return(
        <div>
            <div className="itemList-container">
                <img className="img-product" src={images[data.pictureUrl]} alt={data.title} />
                <p>Price: ${data.price}</p>
                <Link to={`/item/${data.id}`} style={{textDecoration: 'none', fontSize: '20px', color: '#00695c'}}>
                    <p className='more-btn'>Ver más</p>
                </Link>
            </div>
        </div>
    )
}

export default Item