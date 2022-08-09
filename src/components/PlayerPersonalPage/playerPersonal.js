import './playerPersonal.css'

export default function PlayerPersonal() {

    return (
        <>
            <div className="player_personal_content">
                <div className="player_img">
                    <div className="small_info_player">
                        <h3 className='info_text posi'>PORTERO</h3>
                        <h1 className='info_text name'>Paco</h1>
                        <h2 className='info_text number'>2</h2>
                    </div>
                    <div className="img_player"></div>
                </div>
                <div className="player_info">
                    <div className='content_title_box'>
                        <div>
                            <div className="content_title">
                                <h3 className="content_title_main">Datos Personales</h3>
                            </div>
                            <hr className="content_separator" />
                        </div>
                        <div className="data_person">
                            <div className="content_data_person">
                                <h1 className='content_text_main'>Nombre</h1>
                                <h2 className='content_text_not_main'>Paco Fernandez Zidane</h2>
                            </div>
                            <div className="content_data_person">
                                <h1 className='content_text_main'>Lugar de nacimiento</h1>
                                <h2 className='content_text_not_main'>Madrid</h2>
                            </div>
                            <div className="content_data_person">
                                <h1 className='content_text_main'>Fecha de nacimiento</h1>
                                <h2 className='content_text_not_main'>12/12/2003</h2>
                            </div>
                            <div className="content_data_person">
                                <h1 className='content_text_main'>Posicion</h1>
                                <h2 className='content_text_not_main'>Portero</h2>
                            </div>
                            <div className="content_data_person">
                                <h1 className='content_text_main'>Peso</h1>
                                <h2 className='content_text_not_main'>50 kg</h2>
                            </div>
                            <div className="content_data_person">
                                <h1 className='content_text_main'>Altura</h1>
                                <h2 className='content_text_not_main'>2,00 m</h2>
                            </div>
                        </div>
                    </div>
                    <div className="img_back"></div>
                    <div className="trayectoria_stats">
                        <div className="stats">
                            <div>
                                <div className="content_title">
                                    <h3 className="content_title_main">Estadísticas</h3>
                                </div>
                                <hr className="content_separator" />
                            </div>
                            <div className="stats_content">
                                <div className="content_stats">
                                    <h1 className='stats_infoNumber'>60</h1>
                                    <h2 className='stats_infoText'>Partidos jugados</h2>
                                </div>
                                <div className="content_stats">
                                    <h1 className='stats_infoNumber'>0</h1>
                                    <h2 className='stats_infoText'>Goles encajados</h2>
                                </div>
                                <div className="content_stats">
                                    <h1 className='stats_infoNumber'>6</h1>
                                    <h2 className='stats_infoText'>Paradas</h2>
                                </div>
                                <div className="content_stats">
                                    <h1 className='stats_infoNumber'>180</h1>
                                    <h2 className='stats_infoText'>Minutos jugados</h2>
                                </div>
                            </div>
                        </div>
                        <div className="trayectoria">
                            <div>
                                <div className="content_title">
                                    <h3 className="content_title_main">Trayectoria</h3>
                                </div>
                                <hr className="content_separator" />
                            </div>
                            <div className="content_stats">
                                <h3 className='stats_infoText'>-Sporting Club 2018-2022</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}