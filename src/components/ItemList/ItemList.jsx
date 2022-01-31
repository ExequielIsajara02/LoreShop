import React, {useEffect, useState} from 'react';
import Item from '../Item/Item';
import './ItemList.css'
import db from '../../firebase'
import {collection, getDocs } from 'firebase/firestore';
import LoaderPage from '../LoaderPage/LoaderPage';




const ItemList = () => {

    const [loader, setLoader] = useState(true)
    const [items, setItems] = useState([])
   

    async function getItems(db) {
        const itemsCol = collection(db, 'products');
        const itemsSnapshot = await getDocs(itemsCol);
        const itemsList = itemsSnapshot.docs.map(doc => {
            let items = doc.data();
            items.id = doc.id;
            return items
        });
        return itemsList;
    }

    // Se montara y actualizaran los datos del o los componentes
    useEffect(() => {
        getItems(db).then((result) => {
            setItems(result)
            setLoader(false)
        })
        .catch(() => {
            setLoader(true)
        })
    }, [])
    
    


    return(
        <div className="container-list">
            {
                loader ? <div className='loader'><LoaderPage/></div> : <h2 className="title-products">Productos destacados</h2>
            }
            {
                items.map((item) => {
                    return(
                        <Item data={item} key={item.id}></Item>
                    )
                })
            }
        </div>
    );
}

export default ItemList
