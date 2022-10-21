import React from 'react';
import { Link } from 'react-router-dom';
import './Men.css';

export default function Men() {
    return (
        <div className="grid-men">
            <Link to="/men-a" exact className="team-men" >
                <div className="bg-team" style={{ backgroundImage: 'url(./assets/men-a.jpg)' }} />
                <h2 className="name-team">MEN A</h2>
            </Link>
            <Link to="/men-b" exact className="team-men">
                <div className="bg-team" style={{ backgroundImage: 'url(./assets/men-b.jpg)' }} />
                <h2 className="name-team">MEN B</h2>
            </Link>
        </div>
    )
}
