import React, {useState, useEffect} from "react";
import images from "../../assets/images";
import CategoriesItem from "../CategoriesItem/CategoriesItem";
import { Link } from "react-router-dom";

const CategoriesContainer = () => {

    const [categories, setCategories] = useState([])


    const categoriesProducts = [
        {
            id: '1',
            name: 'Anime',
            title: 'Remera Anime',
            pictureUrl: `${images.img1}`
        },
        {
            id: '2',
            name: 'Videogame',
            title: 'Remera videojuegos',
            pictureUrl: `${images.img3}`
        }
    ]

    const categoriesPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
         resolve(categoriesProducts)
        }, 2000)
    })
 
    const getCategoriesPromise = () => {
        categoriesPromise.then((response) => {
            setCategories(response)
        })
        .catch((err) => {
            console.log(err)
        })
         
    }
 
    useEffect(() =>{
        getCategoriesPromise()
    }, [])
 





    return(
        <div>
            {
                categories.map((product) => {
                    return(
                        <div key={product.id}>
                            <Link to={`/category/${product.id}`}>
                                <CategoriesItem
                                    name={product.name}
                                    title={product.title}
                                    pictureUrl={product.pictureUrl}
                                    id={product.id}
                                >
                                </CategoriesItem>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CategoriesContainer