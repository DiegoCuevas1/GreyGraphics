import React from "react";
import './Portfolio.css';
import { Link } from 'react-router-dom';

function Portfolio()
{
    return(
        <div className="portfolio">
            <div className="banner">
                <img src="./images/banner.jpg" alt="Banner Image for Grey Graphics Printing"/>
            </div>
            <div className="btn">
                <Link to="/quote">
                    <button>Get A Quote Today!</button>
                </Link>
            </div>
            <div className="cards">
                <div className="card"> 
                    <img src="./images/stock1.jpeg" alt="Three buckets of Ink for Screen Printing" />
                    <div className="overlay">
                        <p>Card 1</p>
                    </div>
                </div>
                <div className="card">
                    <img src="./images/stock2.jpeg" alt="Three buckets of Ink for Screen Printing" />
                    <div className="overlay">
                        <p>Card 2</p>
                    </div>
                </div>
                <div className="card">
                    <img src="./images/stock3.jpeg" alt="Three buckets of Ink for Screen Printing" />
                    <div className="overlay">
                        <p>Card 3</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;