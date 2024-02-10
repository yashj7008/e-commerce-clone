import React from "react";
import { Link } from "react-router-dom";
import Search from "../pages/Search";


import {useSelector} from 'react-redux'


const Navbar = () => {
    
    const items = useSelector((state) => state.cart)
    console.log(items) 

 
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span className="logo">REDUX STORE</span>
      <Search/>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
        <span className="cartCount">Cart items:{items.length}</span>
      </div>
    </div>
  );
};

export default Navbar;