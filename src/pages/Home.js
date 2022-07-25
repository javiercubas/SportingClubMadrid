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
import { countDown } from '../components/Partidos/Timer/countDown';
import ContactForm from '../components/ContactForm/ContactForm';
import TwitterTimeline from '../components/TwitterTimeline/TwitterTimeline';
import Partners from '../components/Partners/Partners';

export default function Home() {
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
            <Partners/>
            <div style={{ height: "100%", width: "95%" }}>
                <h2 className='title-matches'>Tablas de Clasificación</h2>
            </div>
            {/* <div className='matches'>
            <TablaClasificacion />
            <TablaClasificacion />
            <TablaClasificacion />
            </div> */}
            <TwitterTimeline/>
        </>
    )
}
