import React from 'react'
import {Nav, NavIcon, NavLink,Bars} from "./elementNavbar.js";

function Navbar() {
    return (
        
         <Nav > 
             <NavLink to="/" className="logo"> Pizza</NavLink>
             <NavIcon>
                 <p>Menu</p>
                 <Bars />
             </NavIcon>

      </Nav>  
       
    )
}

export default Navbar
