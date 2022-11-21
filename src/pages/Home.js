import React, { useEffect, useState } from 'react';
import Promo from '../components/Promo/Promo';
import CardMatch from '../components/Partidos/cardMatch.js';
import './Home.css';
import TablaClasificacion from '../components/TablaClasificacion/TablaClasificacion';
import Contact from '../components/Contact/Contact';
import Partners from '../components/Partners/Partners';
import University from '../components/Universities/UniversityElement/university';

export default function Home() {
    const url = 'https://clever-neumann.82-223-205-248.plesk.page/api/matches?populate=%2A&sort[0]=Fecha&sort[1]=Hora&pagination[pageSize]=150'
    const [todos, setTodos] = useState()
    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJSON = await response.json()
        setTodos(responseJSON.data)
    }

    useEffect(() => {
        fetchApi()
    }, [])
    let matches = []
    let i = 0;
    if (todos) {
        todos.map((match, index) => {
            let fecha = match.attributes.Fecha;
            let dia = "", mes = "", año = "";
            dia = fecha[6] + fecha[7];
            mes = fecha[4] + fecha[5];
            año = fecha[0] + fecha[1] + fecha[2] + fecha[3];
            fecha = dia + "-" + mes + "-" + año;
            let fecha2 = mes + "/" + dia + "/" + año;
            let f1 = new Date(fecha2); //31 de diciembre de 2015
            let f2 = new Date(Date.now());
            if (f1 >= f2) {
                if (match.attributes.team.data.id != "3") {
                    i++;
                    if (i <= 2) {
                        matches.push([index, match.attributes.team.data.attributes.name, fecha, match.attributes.Hora, match.attributes.Type, match.attributes.EquipoVisitante, match.attributes.EscudoVisitante.data.attributes.url, match.attributes.LocalVisitante, index])
                    }
                }
            }
        })
    }
    let matchesWomen = []
    let j = 0;
    if (todos) {
        todos.map((match, index) => {
            let fecha = match.attributes.Fecha;
            let dia = "", mes = "", año = "";
            dia = fecha[6] + fecha[7];
            mes = fecha[4] + fecha[5];
            año = fecha[0] + fecha[1] + fecha[2] + fecha[3];
            fecha = dia + "-" + mes + "-" + año;
            let fecha2 = mes + "/" + dia + "/" + año;
            let f1 = new Date(fecha2); //31 de diciembre de 2015
            let f2 = new Date(Date.now());
            if (f1 >= f2) {
                if (match.attributes.team.data.id == "3") {
                    j++;
                    if (j <= 2) {
                        matchesWomen.push([index, match.attributes.team.data.attributes.name, fecha, match.attributes.Hora, match.attributes.Type, match.attributes.EquipoVisitante, match.attributes.EscudoVisitante.data.attributes.url, match.attributes.LocalVisitante, index])
                    }
                }
            }
        })
    }
    return (
        <>
            <Promo />
            <div style={{ height: "100%", width: "95%", display: "flex", justifyContent: "center" }}>
                <h2 className='title-matches'>Next Matches - Mens</h2>
            </div>
            <div className='matches'>
                {!matches ? 'Cargando...' :
                    matches.map((match) => {
                        return (
                            <CardMatch
                                key={match[0]}
                                equipo={match[1]}
                                fecha={match[2]}
                                hora={match[3]}
                                competicion={match[4]}
                                equipoVisitante={match[5]}
                                escudoVisitante={match[6]}
                                LocalOVisitante={match[7]}
                                index={match[8]}
                            />
                        )
                    })
                }
            </div>
            <University />
            <div style={{ height: "100%", width: "95%", display: "flex", justifyContent: "center" }}>
                <h2 className='title-matches'>Next Matches - Women</h2>
            </div>
            <div className='matches'>
                {!matchesWomen ? 'Cargando...' :
                    matchesWomen.map((match) => {
                        return (
                            <CardMatch
                                key={match[0]}
                                equipo={match[1]}
                                fecha={match[2]}
                                hora={match[3]}
                                competicion={match[4]}
                                equipoVisitante={match[5]}
                                escudoVisitante={match[6]}
                                LocalOVisitante={match[7]}
                                index={match[8]}
                            />
                        )
                    })
                }
            </div>
            <Partners />
            <div style={{ height: "100%", width: "95%" }}>
                <h2 className='title-matches'>Classification</h2>
            </div>
            <div class="classification">
                <TablaClasificacion />
                <TablaClasificacion />
            </div>
            <Contact />
            {/*<TwitterTimeline/>*/}
        </>
    )
}
