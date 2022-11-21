import './cardMatch.css'
import CountDown from './Timer/countDown.js';

export default function CardMatch(props) {
    const { equipo, fecha, hora, competicion, equipoVisitante, escudoVisitante, LocalOVisitante, index } = props;
    let fondo, posicion, equipo1, equipo2, escudo1, escudo2;
    if (LocalOVisitante === false) {
        equipo1 = equipo;
        equipo2 = equipoVisitante;
        escudo1 = "https://static.wixstatic.com/media/d78913_5b532f30dd3f4c8999ea776d97203a61~mv2.png/v1/fill/w_244,h_317,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screenshot__125_-removebg-preview.png";
        escudo2 = "https://clever-neumann.82-223-205-248.plesk.page" + escudoVisitante;
        fondo = "/assets/fondo1.jpg";
        posicion = "left";
    }
    else {
        equipo1 = equipoVisitante;
        equipo2 = equipo;
        escudo1 = "https://clever-neumann.82-223-205-248.plesk.page" + escudoVisitante;
        escudo2 = "https://static.wixstatic.com/media/d78913_5b532f30dd3f4c8999ea776d97203a61~mv2.png/v1/fill/w_244,h_317,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screenshot__125_-removebg-preview.png";
        fondo = "/assets/fondo2.jpg";
        posicion = "right";
    }
    let dia = "", mes = "", año = "", fecha2 = "";
    if (fecha) {
        dia = fecha[0] + fecha[1];
        mes = fecha[3] + fecha[4];
        año = fecha[6] + fecha[7] + fecha[8] + fecha[9];
        fecha2 = año + "/" + mes + "/" + dia;
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
                        <div className='escudo' style={{ backgroundImage: "url(" + escudo1 }}></div>
                        <div className='nombreEquipo'>
                            <h1 className='nameTeam'>{equipo1}</h1>
                        </div>
                    </div>
                    <CountDown
                        date={fecha2 + " " + hora + ":00"}
                        id={index}
                    />
                    <div className='equipo'>
                        <div className='escudo' style={{ backgroundImage: "url(" + escudo2 }}></div>
                        <div className='nombreEquipo'>
                            <h1 className='nameTeam'>{equipo2}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}