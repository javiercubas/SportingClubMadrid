import React from 'react';
import Promo from '../components/Promo/Promo';
import CardMatch from '../components/Partidos/cardMatch.js';
import './Home.css';
import TablaClasificacion from '../components/TablaClasificacion/TablaClasificacion';

export default function Men() {
    return (
        <>
            <Promo />
            <div style={{ height: "100%", width: "95%", display:"flex", justifyContent: "center" }}>
                <h2 className='title-matches'>Next Matches - Mens</h2>
            </div>
            <div className='matches'>
                <CardMatch
                    equipo = 'Masculino'
                    fecha = '01/01/2022'
                    hora = '20:00'
                    competicion = 'Pretemporada'
                    equipoLocal = 'Sporting Club Madrid'
                    equipoVisitante = 'Agrupación Deportiva Colmenar'
                />
                <CardMatch
                    equipo = 'Femenino'
                    fecha = '01/01/2022'
                    hora = '20:00'
                    competicion = 'Pretemporada'
                    equipoLocal = 'Sporting Club Madrid'
                    equipoVisitante = 'Atletico De Madrid'
                />
            </div>
            <div style={{ height: "100%", width: "95%" }}>
                <h2 className='title-matches'>Tablas de Clasificación</h2>
            </div>
            <div className='matches'>
            <TablaClasificacion />
            <TablaClasificacion />
            <TablaClasificacion />
            </div>
            
        </>
    )
}
