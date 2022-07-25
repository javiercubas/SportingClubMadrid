import React from 'react';
import './Partners.css';
export default function Partners() {
    return (
        <div className="grid-partners">
            <div className="partner--text">
                <h3>Our Sponsors and partners</h3>
            </div>
            <div className="partner">
                <a href="http://madridsoccertour.com/" target="_blank"><img className="partner--img" src='./assets/mst.webp' /></a>
            </div>
            <div className="partner">
                <a href="https://www.rfef.es/" target="_blank"><img className="partner--img" src='./assets/rfef.webp' /></a>
            </div>
            <div className="partner">
                <a href="https://www.rffm.es/" target="_blank"><img className="partner--img" src='./assets/rffm.webp' /></a>
            </div>
            <div className="partner">
                <a href="https://www.joma-sport.com/" target="_blank"><img className="partner--img" src="./assets/joma.webp" /></a>
            </div>
        </div>
    )
}

