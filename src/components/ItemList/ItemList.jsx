import React, {useEffect, useState} from 'react';
import Item from '../Item/Item';
import './ItemList.css'
import images from '../../assets/images';



const ItemList = () => {

    const [loader, setLoader] = useState(true)
    const [items, setItems] = useState([])

    const dataItems = [
        {
          id: 1,
          title: 'Remera Anime',
          description: 'Remera negra Talle L',
          price: '$ 3000',
          pictureUrl: `${images.img1}`,
          stock: 10
        },
        {
            id: 2,
            title: 'Remera Anime',
            description: 'Remera blanca Talle S',
            pictureUrl: `${images.img2}`,
            price: '$ 2000',
            stock: 5
        }

    ]

    // Se creara una promesa que devuelve resolve (correcto) y reject (algo fallo)
    const dataPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataItems)
        }, 2000)
        
    })

    // Se montara y actualizaran los datos del o los componentes
    useEffect(() => {
        dataPromise.then((result) => {
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
                loader ? <p className="loader">Loading....</p> : <h2 className="title-products">Productos destacados</h2>
            }
            {
                items.map((item) => {
                    return(
                        
                        <Item key={item.id} 
                            title={item.title} 
                            price={item.price}
                            description={item.description}
                            img={item.pictureUrl}
                            stock={item.stock} 
                        >
                        </Item>
                    )
                })
            }
        </div>
    );
}

export default ItemList
