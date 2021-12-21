import React from "react";
import HomePage from "../Pages/Home/HomePage";
import CategoriesContainer from "../CategoriesContainer/CategoriesContainer";
import Contact from "../Pages/Contact/Contact";
import AboutUs from "../Pages/about/About";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import NavBar from "../NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ItemDetailPage from "../Pages/ItemDetailPage/ItemDetailPage";
import CategoriesItem from "../CategoriesItem/CategoriesItem";
import CartPage from "../Pages/Cart/CartPage";





const AppRouter = () => {
    return(
        <Router>
            <div>
                <NavBar/>
                <Routes>
                    <Route path='/item/:id' element={<ItemDetailPage/>} />
                    <Route path='/category/:id' element={<CategoriesItem/>} />
                    <Route path='/category' element={<CategoriesContainer/>}/>
                    <Route path='/cart' element={<CartPage/>}></Route>
                    <Route path='/about' element={<AboutUs/>} />
                    <Route path='/contact' element={<Contact/>}></Route>
                    <Route path='/' element={<HomePage/>} />
                    <Route path='*' element={<NotFoundPage/>} />
                </Routes>
            </div>
        </Router>
    )
}

export default AppRouter