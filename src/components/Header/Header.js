import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';
const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="header logo"></img>
            <nav>
                <a className="shopp" href="/shop">Shop</a>
                <a href="/orders">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;