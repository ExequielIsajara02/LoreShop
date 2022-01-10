import React from 'react';
import './NavBar.css'
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'



const NavBar = () => {


    return (
        <div>
            <nav>

                <Link to={'/'} style={{textDecoration: 'none'}}><h3 className="title">Lore's Shop</h3></Link>

                <div className="content-list">
                    <Link to={'/'} style={{'textDecoration' : 'none'}}>
                        <Button href="#text-buttons" variant="text" className="btn-nav">Home</Button>
                    </Link>

                    
                    <Link to={'/category'} style={{'textDecoration' : 'none'}}>
                        <Button href="#text-buttons" variant="text" className="btn-nav">Category</Button>
                    </Link>

                
                    <Link to={'/contact'} style={{'textDecoration' : 'none'}}>
                        <Button href="#text-buttons" variant="text" className="btn-nav">Contact</Button>
                    </Link>
                    

                    <Link to={'/about'} style={{'textDecoration' : 'none'}}>
                        <Button href="#text-buttons" variant="text" className="btn-nav">About us</Button>
                    </Link>
                </div>
                
                <CartWidget/>
            </nav>
        </div>
    )
}

export default NavBar