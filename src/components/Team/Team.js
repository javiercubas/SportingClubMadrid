import React from 'react'
import Roster from '../Roster/Roster'
import CardMatch from '../Partidos/cardMatch'
import TablaClasificacion from '../TablaClasificacion/TablaClasificacion'

export default function Team(props) {
    const { id } = props;
  return (
    <>
            <Roster id = {id} />
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
            {/* <div style={{ height: "100%", width: "95%" }}>
                <h2 className='title-matches'>Tablas de Clasificación</h2>
            </div>
            <div className='matches'>
            <TablaClasificacion />
            <TablaClasificacion />
            <TablaClasificacion />
            </div> */}
            
        </>
  )
}