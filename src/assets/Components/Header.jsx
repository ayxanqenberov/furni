import React from 'react';
import '../scss/_header.scss';


function Header() {
  return (
    <header>
      <nav>
        <a href="/" className="logo">Furni.</a>
        <ul>
          <li>
            <a href="/">Home</a>
            <div className='line'></div>
          </li>
          <li>
            <a href="/shop">Shop</a>
            <div className='line'></div>
          </li>
          <li>
            <a href="/about">About us</a>
            <div className='line'></div>
          </li>
          <li>
            <a href="/services">Services</a>
            <div className='line'></div>
          </li>
          <li>
            <a href="/blog">Blog</a>
            <div className='line'></div>
          </li>
          <li>
            <a href="/contact">Contact us</a>
            <div className='line'></div>
          </li>
        </ul>
        <div className="userActions">
          <a href="/account"><i className="fas fa-user"></i></a>
          <a href="/cart"><i className="fas fa-shopping-cart"></i></a>
        </div>
      </nav>
    </header>
  );
}

export default Header;