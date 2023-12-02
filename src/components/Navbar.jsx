import React from "react";
import icon from '../assets/icon.png'
export default function Navbar(){
    return(
        <nav className="navbar">
        <img src={icon} />
            <h3>my travel journal.</h3>
        </nav>
    )
}