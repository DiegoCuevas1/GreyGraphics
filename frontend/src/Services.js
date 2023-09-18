import {React} from 'react';
import './Services.css';

function Services()
{
    return(
        <div className='services'>
            <div className='header'><h1>Elevating Your Designs.</h1></div>
            <div className='cards'>
                <div className='card'>
                    <img src="./images/stock4.jpg" alt="Screen Printing Stock Image"></img>
                    <hr />
                    <h2>Screen Printing</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus, pien orci.</p>
                </div>
                <div className='card'>
                    <img src="./images/stock6.webp" alt="Screen Printing Stock Image" id='eternal'></img>
                    <hr />
                    <h2>Logo Design</h2>
                    <p>Need help with <em>branding</em>? Don't worry we got you covered</p>
                </div>
                <div className='card'>
                <img src="./images/stock5.jpg" alt="Screen Printing Stock Image"id="webdev"></img>
                    <hr />
                    <h2>Website Design</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus, pien orci.</p>
                </div>
            </div>
        
        </div>
    );
}

export default Services;