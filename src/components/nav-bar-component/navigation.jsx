import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
    return <nav style={{border: '1px grey solid'}}>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent:'space-around'}}>
            <Link to='/'>Personal Info</Link>
            <Link to='/skills'>Skills</Link>
        </div>
    </nav>
}

export default Navbar
