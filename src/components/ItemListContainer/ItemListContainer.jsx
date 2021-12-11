import React from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';


const ItemListContainer = () => {

    return(
        <div>
            <ItemList/>
            <ItemDetailContainer/>
        </div>
    );
}

export default ItemListContainer
