import React from 'react'
import './cardPlayer.css'

export default function cardPlayer(props) {
    const { posicion } = props;
    return (
        <div className={"box-player " + posicion}>
            Hola
        </div>
    )
}

