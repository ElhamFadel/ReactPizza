import React from 'react';
import {SidbarConatiner,Icon,CloseIcon,SidbarMenu,SidbarLink,SidBarMenu,SideBtnWrap,SidebarRoute} from "./SidebareElement.js";

function Sidebar({toggle,isOpen}) {
    return (
        <>
        <SidbarConatiner isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
        <SidbarMenu>
            <SidbarLink to="/">
                Pizzas
            </SidbarLink>
            <SidbarLink to="/">
               Desserts
            </SidbarLink>
            <SidbarLink to="/">
               Full Menu
            </SidbarLink>
        </SidbarMenu>
        <SideBtnWrap>
            <SidebarRoute to="/">Order Now</SidebarRoute>
        </SideBtnWrap>
        </SidbarConatiner>
        </>
    )
}

export default Sidebar
