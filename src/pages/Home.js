import React from 'react';
import CarruselOpciones from '../components/CarruselOpciones/CarruselOpciones';
import Carrusel from '../components/Carrusel/Carrusel';
import TOTW from '../components/TOTW/TOTW';
import Promo from '../components/Promo/Promo';
import EquiposHome from '../components/EquiposHome/EquiposHome'
import WebStats from '../components/WebStats/WebStats';
import TOTW2 from '../components/TOTW/TOTW2';

export default function Home() {
    return (
        <>
            <Promo/>
            <div style={{ display: 'flex', height: '60vh', width: '100%', background: 'white' }}>
                <CarruselOpciones />
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <h2>Once de la semana</h2>
                    <TOTW />
                </div>
            </div>
            <EquiposHome/>
            <WebStats />
        </>
    )
}
