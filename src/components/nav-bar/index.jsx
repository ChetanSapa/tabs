import React from "react";
import {NavLink} from "react-router-dom";
import '../../App.css'

const Navbar = () => {
    return <nav className={'nav'}>
        <div className={'nav-app'}>
            <NavLink to='/' activeclassname={'active'} className={'navLink'}>Personal Info</NavLink>
            <NavLink to='/skills' activeclassname={'active'} className={'navLink'}>Skills</NavLink>
        </div>
    </nav>
}

export default Navbar
