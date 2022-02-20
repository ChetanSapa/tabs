import React from "react";
import {NavLink} from "react-router-dom";
import '../../App.css'

const Navbar = () => {
    return <nav>
        <div className={'nav-app'}>
            <NavLink to='/' activeClassName={'active'} className={'navLink'}>Personal Info</NavLink>
            <NavLink to='/skills' activeClassName={'active'} className={'navLink'}>Skills</NavLink>
        </div>
    </nav>
}

export default Navbar
