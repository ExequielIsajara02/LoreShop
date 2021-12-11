import React, {useEffect, useState} from "react";
import images from '../../assets/images';
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {

    const [details, setDetails] = useState([])


    const Details = {
        id: 1,
        title: 'Remera Anime',
        name: 'Remera Demon Slayer',
        description: 'Color negro - Talle L',
        price: '$ 3000',
        pictureUrl: `${images.img1}`
    }

    

    const detailsPromise = new Promise((resolve, reject) => {
       setTimeout(() => {
        resolve(Details)
       }, 2000)
    })

    const getDetailPromise = () => {
        detailsPromise.then((response) => {
            setDetails(response)
            console.log(response)
        })
        .catch((err) => {
            console.log(err)
        })
        
    }

    useEffect(() =>{
        getDetailPromise()
    }, [])


    return(
        <div>
            <ItemDetail data={details}></ItemDetail>
        </div>
    )
}

export default ItemDetailContainer