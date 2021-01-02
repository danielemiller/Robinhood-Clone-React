import React from 'react';
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import './Header.css';
import Logo from '../assets/images/robinhood.svg';


const Header = () => {
    return (
        <div className="header__wrapper">
            <div className="header__logo">
              <a href='/'><img src={Logo} width={25} /></a>
            </div>
            <div className="header__search">
                <div className="header__searchContainer">
                  <SearchOutlined />  
                  <input type="text" placeholder="Search" />  
                </div>
            </div>
            <div className="header__menuItems">
                <a href="/dashboard">Free Stocks</a>
                <a href="/dashboard">Portfolio</a>
                <a href="/dashboard">Cash</a>
                <a href="/dashboard">Messages</a>
                <a href="/Login">Account</a>
            </div>
        </div>
    )
}

export default Header
