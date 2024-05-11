import React from "react";
import { Link } from "react-router-dom";
import './Header.css'
import Logo from './Logo.jpg'

function Header() {
  return (
    <header>
      <img src={Logo} alt="" />
      <nav>
        <ul>
          <li>
            <Link to="/">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/book">
              BOOK
            </Link>
          </li>
          <li>
            <Link to="/cart">
              CART
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
