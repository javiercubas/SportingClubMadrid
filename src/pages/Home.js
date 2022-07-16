import React from 'react';
import CarruselOpciones from '../components/CarruselOpciones/CarruselOpciones';
import Carrusel from '../components/Carrusel/Carrusel';
import TOTW from '../components/TOTW/TOTW';
import Promo from '../components/Promo/Promo';
import EquiposHome from '../components/EquiposHome/EquiposHome'
import WebStats from '../components/WebStats/WebStats';
import TOTW2 from '../components/TOTW/TOTW2';
import CardMatch from '../components/Partidos/cardMatch.js';
import './Home.css';
import TablaClasificacion from '../components/TablaClasificacion/TablaClasificacion';

export default function Home() {
    return (
        <>
            <Promo />
            <div style={{ height: "100%", width: "95%" }}>
                <h2 className='title-matches'>Próximos Partidos</h2>
            </div>
            <div className='matches'>
                <CardMatch
                    equipo = 'Masculino'
                    fecha = '01/01/2022'
                    hora = '20:00'
                    competicion = 'Pretemporada'
                    equipoLocal = 'Sporting Club Madrid'
                    equipoVisitante = 'Sporting Club Madrid'
                />
                <CardMatch
                    equipo = 'Masculino'
                    fecha = '01/01/2022'
                    hora = '20:00'
                    competicion = 'Pretemporada'
                    equipoLocal = 'Sporting Club Madrid'
                    equipoVisitante = 'Sporting Club Madrid'
                />
                <CardMatch
                    equipo = 'Masculino'
                    fecha = '01/01/2022'
                    hora = '20:00'
                    competicion = 'Pretemporada'
                    equipoLocal = 'Sporting Club Madrid'
                    equipoVisitante = 'Sporting Club Madrid'
                />
            </div>
            <div className='matches2'>
            <TablaClasificacion class="aaa"/>
            <TablaClasificacion class="aaa"/>
            <TablaClasificacion class="aaa"/>
            </div>
            
        </>
    )
}
