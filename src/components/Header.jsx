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
                <a href="/">Free Stocks</a>
                <a href="/">Portfolio</a>
                <a href="/">Cash</a>
                <a href="/">Messages</a>
                <a href="/Signup">Account</a>
            </div>
        </div>
    )
}

export default Header
