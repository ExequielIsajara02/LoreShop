import React from 'react';
import './ItemListContainer.css';
import Item from '../Item/Item';


const ItemListContainer = () => {

    const dataProducts = [
        {
          name: 'Camiseta con Dibujo',
          price: '$ 3000',
          stock: '10'
        },
        {
            name: 'Camiseta sin Dibujo',
            price: '$ 2000',
            stock: '5'
        }

    ]
    
    


    return(
        <div className="container-list">
            <h2>Productos destacados</h2>
            {dataProducts.map((product) => {
                return(
                    <Item name={product.name} price={product.price} stock={product.stock}></Item>
                )
            })}
           
        </div>
    );
}

export default ItemListContainer
