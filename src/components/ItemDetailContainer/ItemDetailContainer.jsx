import React, {useEffect, useState} from "react";
import images from '../../assets/images';
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

    const [details, setDetails] = useState([])
    const [load, setLoad] = useState(true)
   

    console.log("Parametros por ruta ", useParams())

    const { id } = useParams()

    const Details = [
        {
            id: '1',
            title: 'Remera Anime',
            description: 'Remera negra Talle L',
            price: '$ 3000',
            pictureUrl: `${images.img1}`,
            stock: 10
        },
        {
            id: '2',
            title: 'Remera Anime',
            description: 'Remera blanca Talle S',
            price: '$ 2000',
            pictureUrl: `${images.img2}`,
            stock: 5
        }
    
    ]
        
    
        

    

    

    const detailsPromise = new Promise((resolve, reject) => {
       setTimeout(() => {
        setLoad(false)
        resolve(Details)
       }, 2000)
    })



    const getDetailPromise = () => {
        detailsPromise.then((response) => {
            setDetails(response)
        })
        .catch((err) => {
            console.log(err)
        })
        
    }

    useEffect(() =>{
        getDetailPromise()
    }, [id])


    return(
        <div>
            {
                load ? <p>Loading....</p>
                :
                details.filter(detailsItem => detailsItem.id === id).map((detail) => {
                return(
                    
                    <ItemDetail 
                        title={detail.title}
                        description={detail.description}
                        price={detail.price}
                        img={detail.pictureUrl}
                        stock={detail.stock}
                        id={detail.id}
                    >
                    </ItemDetail>
                )
                })
            }
        </div>
    )
}

export default ItemDetailContainer