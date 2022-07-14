import React from 'react'
import './Carrusel.css'

export default function Card(props) {
    const {title} = props;
    return (
        <div className="card">
            <h3 className="title">{title}</h3>
            <div className="bar">
                <div className="emptybar"></div>
                <div className="filledbar"></div>
            </div>
            <div className='image-card'/>
        </div>
    )
}