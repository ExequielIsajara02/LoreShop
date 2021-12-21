import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import images from "../../assets/images";
import CategoriesBanner from "../CategoriesBanner/CategoriesBanner";



const CategoriesItem = () => {

    const {id} = useParams()
    console.log(id)

    const [items, setItems] = useState([])

    const dataItems = [
        {
          id: "1",
          title: 'Remera Anime',
          price: '$ 3000',
          pictureUrl: `${images.img1}`
        },
        {
            id: "2",
            title: 'Remera Anime',
            pictureUrl: `${images.img4}`,
            price: '$ 2000'
        }

    ]

    // Se creara una promesa que devuelve resolve (correcto) y reject (algo fallo)
    const dataPromise = new Promise((resolve, reject) => {
        resolve(dataItems)
        
    })

    // Se montara y actualizaran los datos del o los componentes
    useEffect(() => {
        dataPromise.then((result) => {
            console.log("La respuesta de la promesa es: ", result)
            setItems(result)
           
        })
    },[])
    

    return(
        <div>
          {
            items.filter((itemsCategory => itemsCategory.id === id)).map((item) => {
                return(
                    <div>
                        <CategoriesBanner 
                            price={item.price}
                            img={item.pictureUrl}
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