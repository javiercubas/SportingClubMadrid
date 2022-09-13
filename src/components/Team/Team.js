import React, {useEffect, useState} from 'react'
import Roster from '../Roster/Roster'
import CardMatch from '../Partidos/cardMatch'
import TablaClasificacion from '../TablaClasificacion/TablaClasificacion'

export default function Team(props) {
    const { id } = props;
    const url = 'https://clever-neumann.82-223-205-248.plesk.page/api/matches?populate=%2A&sort[0]=Fecha&sort[0]=Hora&pagination[page]=0&pagination[pageSize]=2'
    const [todos, setTodos] = useState()
    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJSON = await response.json()
        setTodos(responseJSON.data)
    }

    useEffect(() => {
        fetchApi()
    }, [])
    return (
        <>
            <Roster id={id} />
            <div style={{ height: "100%", width: "95%", display: "flex", justifyContent: "center" }}>
                <h2 className='title-matches'>Next Matches</h2>
            </div>
            <div className='matches'>
                {!todos ? 'Cargando...' :
                    todos.map((match, index) => {
                        return (
                            <CardMatch
                                key={index}
                                equipo={match.attributes.team.data.attributes.name}
                                fecha={match.attributes.Fecha}
                                hora={match.attributes.Hora}
                                competicion={match.attributes.Type}
                                equipoVisitante={match.attributes.EquipoVisitante}
                                escudoVisitante={match.attributes.EscudoVisitante.data.attributes.url}
                                LocalOVisitante={match.attributes.LocalVisitante}
                                index={index}
                            />
                        )
                    })
                }
            </div>
            <div style={{ height: "100%", width: "95%" }}>
                <h2 className='title-matches'>Classification</h2>
            </div>
            <div className='classification'>
                <TablaClasificacion />
                <TablaClasificacion />
            </div>

        </>
    )
}