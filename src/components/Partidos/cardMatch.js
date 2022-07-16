import './cardMatch.css'

export default function CardMatch(props) {
    const { equipo, fecha, hora, competicion, equipoLocal, equipoVisitante } = props;
    return (
        <div className="caja">
            <div className='content-caja'>
                <div className='weekDay'>
                    <div className='teamClub'>
                        <h2 className='category'>{equipo}</h2>
                    </div>
                    <div className='day'>
                        <h3 className='week'>{fecha} - {hora}</h3>
                    </div>
                    <div className='competition'>
                        <h3 className='competitionName'>{competicion}</h3>
                    </div>
                </div>
                <div className='match'>
                    <div className='equipo'>
                        <div className='escudo'></div>
                        <div className='nombreEquipo'>
                            <h1 className='nameTeam'>{equipoLocal}</h1>
                        </div>
                    </div>
                    <div className='tiempo'>
                        <div className='contador'></div>
                    </div>
                    <div className='equipo'>
                        <div className='escudo'></div>
                        <div className='nombreEquipo'>
                            <h1 className='nameTeam'>{equipoVisitante}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}