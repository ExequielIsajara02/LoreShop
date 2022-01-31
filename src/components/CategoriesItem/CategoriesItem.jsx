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

    


    async function getItems(db) {
        const itemsCol = collection(db, 'products');
        const itemsSnapshot = await getDocs(itemsCol);
        const itemsList = itemsSnapshot.docs.map(doc => {
            let item = doc.data();
            item.id = doc.id;
            return item
        });
        return itemsList;
    }

    // Se montara y actualizaran los datos del o los componentes
    useEffect(() => {
        getItems(db).then((result) => {
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