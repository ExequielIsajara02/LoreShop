import React, {useEffect, useState} from 'react';
import Item from '../Item/Item';
import './ItemList.css'
import db from '../../firebase'
import {collection, getDocs } from 'firebase/firestore';
import LoaderPage from '../LoaderPage/LoaderPage';




const ItemList = () => {

    const [loader, setLoader] = useState(true)
    const [items, setItems] = useState([])
    /*
    const dataItems = [
        {
          id: 1,
          title: 'Remera Anime',
          price: '$ 3000',
          pictureUrl: `${images.img1}`
        },
        {
            id: 2,
            title: 'Remera Anime',
            pictureUrl: `${images.img2}`,
            price: '$ 2000'
        },
        {
            id: 3,
            title: 'Remera Game',
            price: '$ 1000',
            pictureUrl: `${images.img4}`
        },
        {
            id: 4,
            title: 'Remera Game',
            pictureUrl: `${images.img5}`,
            price: '$ 1500'
        }

    ]

    // Se creara una promesa que devuelve resolve (correcto) y reject (algo fallo)
    const dataPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataItems)
        }, 2000)
        
    }) */

    async function getItems(db) {
        const itemsCol = collection(db, 'products');
        const itemsSnapshot = await getDocs(itemsCol);
        const itemsList = itemsSnapshot.docs.map(doc => {
            console.log("Documento firebase ID: ", doc.id)
            console.log("Documento firebase: ", doc.data())
            let items = doc.data();
            items.id = doc.id;
            console.log("Producto final: ", items)
            return items
        });
        return itemsList;
    }

    // Se montara y actualizaran los datos del o los componentes
    useEffect(() => {
        getItems(db).then((result) => {
            console.log("La respuesta de la promesa es: ", result)
            setItems(result)
            setLoader(false)
        })
        .catch(() => {
            setLoader(true)
        })
    }, [])
    
    


    return(
        <div className="container-list">
            {console.log("Estado de los items: ", items)}
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
