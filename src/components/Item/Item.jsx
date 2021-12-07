import ItemCount from '../ItemCount/ItemCount';

const Item = ({title, price, stock, description, img}) => {
    return(
        <div className="itemList-container">
            <div>
                <img src={img} alt={title} className="img-product"/>
                <p>Price: {price}</p>
                <p>Description: {description}</p>
                <ItemCount stock={stock}></ItemCount>
            </div>
        </div>
    )
}

export default Item