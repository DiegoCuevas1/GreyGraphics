import React from "react";
import './Footer.css';
import { Link } from 'react-router-dom';
function Footer()
{
    return(
        <div className="footer">
            <h1>Grey Graphics</h1>
            <div className="categories">
                <div className="serviceCategory">
                    <h2>Services</h2>
                    <ul>
                        <li><Link to='/design'>Logo Design</Link></li>
                        <li><Link to='/printing'>Screen Printing</Link></li>
                    </ul>
                </div>
                <div className="serviceCategory">
                    <h2>Contact Us</h2>
                    <ul>
                        <li>Julian Fremaint</li>
                        <li><a href="mailto:greygraphicsprinting@gmail.com">GreyGraphicsPrinting@Gmail.com</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;