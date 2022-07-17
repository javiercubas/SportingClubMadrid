import './cardMatch.css'
import CountDown from './Timer/countDown.js';

export default function CardMatch(props) {
    const { equipo, fecha, hora, competicion, equipoLocal, equipoVisitante } = props;
    let fondo;
    let posicion;
    if (equipoLocal == "Sporting Club Madrid") {
        fondo = "/assets/fondo1.jpg";
        posicion = "left";
    }
    else {
        fondo = "/assets/fondo2.jpg";
        posicion = "right";
    }
    return (
        <div className="caja" style={{ backgroundImage: "url(" + fondo + ")", backgroundPosition: posicion }}>
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
                        <CountDown
                            fecha={{fecha}+" "+{hora}+":00"}
                        />
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