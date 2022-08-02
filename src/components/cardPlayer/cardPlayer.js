import React from 'react'
import './cardPlayer.css'

export default function cardPlayer(props) {
    const { nombre, apellido, posicion, dorsal } = props;
    let position;

    if(posicion.length>1){
        position = posicion[0]
        for(let i=1;i<posicion.length;i++){
            position = position + " " +posicion[i];
        }
    }
    else{
        position = posicion;
    }

    return (
        <li className={"box-player " + position}>
            <a href={"/men/"+nombre.toLowerCase()+"-"+apellido.toLowerCase()} className='card-link'>
                <span className="player-name">{apellido}</span>
                <span className="player-position">{posicion[0]}</span>
                <span className="player-number">{dorsal}</span>
                <img src="https://www.realmadrid.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fpng&blobkey=id&blobtable=MungoBlobs&blobwhere=1203427840815&ssbinary=true" alt="Thibaut Courtois" className="player-image" />
                <span className="player-card-profile">Ver la ficha</span>
            </a>
        </li>
    )
}

