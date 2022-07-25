import React from 'react';
import './Partners.css';
export default function Partners() {
    return (
        <div className="grid-partners">
            <div className="partner__text">
                <h3>Our Sponsors <span id="partner__text--yellow">and partners</span></h3>
            </div>
            <a href="http://madridsoccertour.com/" target="_blank" className="partner">
                <img className="partner--img" src='./assets/mst.webp' />
            </a>
            <a href="https://www.rfef.es/" target="_blank" className="partner">
                <img className="partner--img" src='./assets/rfef.webp' />
            </a>
            <a href="https://www.rffm.es/" target="_blank" className="partner">
                <img className="partner--img" src='./assets/rffm.webp' />
            </a>
            <a href="https://www.joma-sport.com/" target="_blank" className="partner">
                <img className="partner--img" src="./assets/joma.webp" />
            </a>
        </div>
    )
}

