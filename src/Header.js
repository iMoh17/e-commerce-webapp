import React from 'react';
import './Header.css';
import {AiOutlineHeart, AiOutlineBell, AiOutlineShoppingCart, AiOutlineUser} from "react-icons/ai";

const Header = (props) => {
    return(
      <div>
      <div className="navbar">  
        <div className="upper-navbar-row">
          <div className="logo">Dealerz.</div>
          <div className="upper-navbar-row-items">
            <div className="upper-navbar-row-items">Call Center</div>
            <div className="upper-navbar-row-items">Shipping & Returns</div>
          </div>
        </div>
        <div className="lower-navbar-row">
          <div className="lower-navbar-texts">
            <div className= "lower-navbar-text">Shop</div>
            <div className= "lower-navbar-text">Promo</div>
            <div className= "lower-navbar-text">About</div>
            <div className= "lower-navbar-text">Blog</div>
          </div>
          <div className="search-bar">
            <input
                type="text"
                value={props.searchQuery}
                onChange={props.handleInputChange}
                placeholder="Search for products..."
              />
            {props.searchResults.length > 0 && (
              <div className="dropdown-menu">
                {props.searchResults.map((product) => (
                  <div key={product.id}>
                    <img src={product.image} alt={product.title} />
                    <p>{product.title}</p>
                  </div>
                ))}
        </div>
      )}
          </div>
          <div className="lower-navbar-icons">
          <AiOutlineBell  className= "lower-navbar-icon"/>
          <AiOutlineHeart className="lower-navbar-icon"/>
          <AiOutlineShoppingCart className="lower-navbar-icon"/>
          <AiOutlineUser className="lower-navbar-icon"/>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Header;