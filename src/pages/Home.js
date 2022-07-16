import React from 'react';
import CarruselOpciones from '../components/CarruselOpciones/CarruselOpciones';
import Carrusel from '../components/Carrusel/Carrusel';
import TOTW from '../components/TOTW/TOTW';
import Promo from '../components/Promo/Promo';
import EquiposHome from '../components/EquiposHome/EquiposHome'
import WebStats from '../components/WebStats/WebStats';
import TOTW2 from '../components/TOTW/TOTW2';
import Promo2 from '../components/Promo2/Promo2';
import CardMatch from '../components/Partidos/cardMatch.js';

export default function Home() {
    return (
        <>
            <Promo/>
            <CardMatch/>
            <Promo2/>
            <WebStats />
        </>
    )
}
