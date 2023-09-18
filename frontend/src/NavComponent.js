import React from "react";
import './NavComponent.css';
import {Link} from "react-router-dom";

function NavComponent()
{
    return(
        <div class="nav">
        <div class="logo">
            <Link to="/">
                Grey Graphics Printing
            </Link>
        </div>
        <div class="links">
            <Link to="/portfolio">
                Portfolio
            </Link>
            <div class="dropdown">
                <button class="dropbtn">Get a Quote</button>
                <div class="dropdown-content">
                    <Link to="/printing">Screen Printing</Link>
                    <hr />
                    <Link to="/design">Logo Design</Link>
                </div>
            </div>
            <Link to="/services">
                Services
            </Link>
        </div>
    </div>
    
    );
}

export default NavComponent;