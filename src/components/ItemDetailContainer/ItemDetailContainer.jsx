import React, {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import LoaderPage from "../LoaderPage/LoaderPage";
import { useParams } from "react-router-dom";
import { doc, getDoc } from 'firebase/firestore'
import db from "../../firebase";


const ItemDetailContainer = () => {

    const [details, setDetails] = useState([])
    const [load, setLoad] = useState(true)

    const { id } = useParams()
   

    async function getItemDetail(db) {
        const docRef = doc(db, 'products', id)
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
            console.log("Document ID: ", docSnap.id)
            console.log("Document data: ", docSnap.data())

            let itemDetail = docSnap.data();
            itemDetail.id = docSnap.id
            console.log("El producto final a mostrar es: ", itemDetail)
            setDetails(itemDetail)
            setLoad(false)
        }
        else {
            console.log("No such document")
        }
    }

    useEffect(() =>{
        /* getProducts(db).then((response) => {
            setDetails(response)
            setLoad(false)
        }) */
        getItemDetail(db)
    }, [id])


    return(
        <div>
            {
                load ? <LoaderPage/>
                :
                <div>
                    <ItemDetail 
                        id={details.id}
                        title={details.title}
                        price={details.price}
                        stock={details.stock}
                        img={details.pictureUrl}
                        description={details.description}
                    >
                    </ItemDetail>
                </div>
                
                
            }
        </div>
    )
}

export default ItemDetailContainer