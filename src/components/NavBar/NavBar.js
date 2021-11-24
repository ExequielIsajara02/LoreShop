import React from 'react';
import './NavBar.css'
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';

const NavBar = () => {

    return (
        <AppBar>
            <nav className="container-nav">
            
                <h3 className="title">Lore's Shop</h3>

                <ul className="content-list">
                    <li><Button href="#text-buttons" variant="text" className="btn-nav">Home</Button></li>
                    <li><Button href="#text-buttons" variant="text" className="btn-nav">Products</Button></li>
                    <li><Button href="#text-buttons" variant="text" className="btn-nav">Contact</Button></li>
                    <li><Button href="#text-buttons" variant="text" className="btn-nav">About Us</Button></li>
                </ul>
            </nav>
        </AppBar>
    )
}

export default NavBar