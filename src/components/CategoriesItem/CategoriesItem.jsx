import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import CategoriesBanner from "../CategoriesBanner/CategoriesBanner";
import LoaderPage from "../LoaderPage/LoaderPage";
import './CategoriesItem.css'
import db from '../../firebase'
import {collection, getDocs } from 'firebase/firestore';



const CategoriesItem = () => {

    const {id} = useParams()
    console.log("La categoria es: ", id)

    const [items, setItems] = useState([])
    const [load, setLoad] = useState(true)

    /* 
    const dataItems = [
        {
          id: "1",
          title: 'Remera Anime',
          pictureUrl: `${images.img1}`,
          price: '$ 3000',
          category: 'anime'
        },
        {
            id: "2",
            title: 'Remera Anime',
            pictureUrl: `${images.img2}`,
            price: '$ 1500',
            category: 'anime'
        },
        {
            id: "3",
            title: 'Remera Game',
            pictureUrl: `${images.img4}`,
            price: '$ 2000',
            category: 'game'
        },
        {
            id: "4",
            title: 'Remera Game',
            pictureUrl: `${images.img5}`,
            price: '$ 2500',
            category: 'game'
        }

    ]

    // Se creara una promesa que devuelve resolve (correcto) y reject (algo fallo)
    const dataPromise = new Promise((resolve, reject) => {
        resolve(dataItems)
        
    }) */


    async function getItems(db) {
        const itemsCol = collection(db, 'products');
        const itemsSnapshot = await getDocs(itemsCol);
        const itemsList = itemsSnapshot.docs.map(doc => {
            console.log("Documento firebase ID: ", doc.id)
            console.log("Documento firebase: ", doc.data())
            let item = doc.data();
            item.id = doc.id;
            console.log("Producto final en categorias: ", item)
            return item
        });
        return itemsList;
    }

    // Se montara y actualizaran los datos del o los componentes
    useEffect(() => {
        getItems(db).then((result) => {
            console.log("La respuesta de la promesa es: ", result)
            setItems(result)
            setLoad(false)
        })
    }, [])

    

    return(
        <div className="category-banner">
          {
            load ? <div className="category-loader"><LoaderPage/></div>
            :
            items.filter((itemsCategory => itemsCategory.category === id)).map((item) => {
                return(
                    <div>
                        {console.log("Los elementos de la categoria son: ", item)}
                        <CategoriesBanner 
                            price={item.price}
                            img={item.pictureUrl}
                            id={item.id}
                        >
                        </CategoriesBanner>
                    </div>
                )
            })
          }
        </div>
    )
}

export default CategoriesItem