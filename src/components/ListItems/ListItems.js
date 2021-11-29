import React from 'react';
import './ListItems.css';
import Item from '../Item/Item';


const ListItems = () => {

    const dataProducts = [
        {
          name: 'Camiseta con Dibujo',
          price: '$ 3000'
        },
        {
            name: 'Camiseta sin Dibujo',
            price: '$ 2000'
        }

    ]
    
    


    return(
        <div className="container-list">
            <h4>Productos destacados</h4>
            {dataProducts.map((product) => {
                return(
                    <Item name={product.name} price={product.price}></Item>
                )
            })}
        </div>
    );
}

export default ListItems
