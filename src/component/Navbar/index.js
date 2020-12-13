import React from 'react'
import {Nav, NavIcon, NavLink,Bars} from "./elementNavbar.js";

function Navbar({toggle}) {
    return (
        
         <Nav onClick={toggle}> 
             <NavLink to="/" className="logo"> Pizza</NavLink>
             <NavIcon>
                 <p>Menu</p>
                 <Bars />
             </NavIcon>

      </Nav>  
       
    )
}

export default Navbar
