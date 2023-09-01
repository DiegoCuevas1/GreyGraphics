import React from "react";
import './NavComponent.css';
import {Link} from "react-router-dom";

function NavComponent()
{
    return(
      <div className="nav">
        <div className="logo">
            <Link to="/">
            Grey Graphics Printing
            </Link>
        </div>
        <div className="links">
            <Link to="/portfolio">
                Portfolio
            </Link>
            <Link to="/printing">
                Get a Quote
            </Link>
            <Link to="/services">
                Services
            </Link>
        </div>
      </div>  
    );
}

export default NavComponent;