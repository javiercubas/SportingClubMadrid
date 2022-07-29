import React from 'react'
import './cardPlayer.css'

export default function cardPlayer(props) {
    const { nombre, apellido, posicion, dorsal } = props;
    return (
        <li className={"box-player " + posicion}>
            <a href={"/men/"+nombre+"-"+apellido} className='card-link'>
                <span className="player-name">{apellido}</span>
                <span className="player-position">{posicion}</span>
                <span className="player-number">{dorsal}</span>
                <img src="https://www.realmadrid.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fpng&blobkey=id&blobtable=MungoBlobs&blobwhere=1203427840815&ssbinary=true" alt="Thibaut Courtois" className="player-image" />
                <span className="player-card-profile">Ver la ficha</span>
            </a>
        </li>
    )
}

