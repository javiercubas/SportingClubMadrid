import './playerPersonal.css'
import { useEffect, useState } from 'react'

export default function PlayerPersonal(props) {
    const url = 'https://clever-neumann.82-223-205-248.plesk.page/api/players/'+props.id+'?populate=%2A'
    const [todos, setTodos] = useState()
    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJSON = await response.json()
        setTodos(responseJSON.data.attributes)
    }

    useEffect(() => {
        fetchApi()
    }, [])
    let image=''
    if (todos){
        if (todos.Photo.data!=null){
            image='url(https://clever-neumann.82-223-205-248.plesk.page'+todos.Photo.data.attributes.url+')'
        }
    }
    
    return (
        <>
            <div className="player_personal_content">
                <div className="player_img">
                    <div className="small_info_player">
                        <h3 className='info_text posi'>{!todos ? 'Cargando...' : todos.positions.data[0].attributes.Type}</h3>
                        <h1 className='info_text name'>{!todos ? 'Cargando...' : todos.Name+" "+todos.Surname}</h1>
                        <h2 className='info_text number'>{!todos ? 'Cargando...' : todos.Dorsal}</h2>
                    </div>
                    <div className="img_player" style={{backgroundImage: image}}></div>
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
                                <h3 className='content_text_main'>Nombre</h3>
                                <p className='content_text_not_main'>{!todos ? 'Cargando...' : todos.Name+" "+todos.Surname}</p>
                            </div>
                            <div className="content_data_person">
                                <h3 className='content_text_main'>Lugar de nacimiento</h3>
                                <p className='content_text_not_main'>{!todos ? 'Cargando...' : todos.BirthdayPlace}</p>
                            </div>
                            <div className="content_data_person">
                                <h3 className='content_text_main'>Fecha de nacimiento</h3>
                                <p className='content_text_not_main'>{!todos ? 'Cargando...' : todos.Birthday}</p>
                            </div>
                            <div className="content_data_person">
                                <h3 className='content_text_main'>Posicion</h3>
                                <p className='content_text_not_main'>{!todos ? 'Cargando...' : todos.positions.data.map((position, index) => { if (index != todos.positions.data.length-1) {return position.attributes.Type+", "} else{return position.attributes.Type} })}</p>
                            </div>
                            <div className="content_data_person">
                                <h3 className='content_text_main'>Peso</h3>
                                <p className='content_text_not_main'>{!todos ? 'Cargando...' : todos.Weight} kg</p>
                            </div>
                            <div className="content_data_person">
                                <h3 className='content_text_main'>Altura</h3>
                                <p className='content_text_not_main'>{!todos ? 'Cargando...' : todos.Height} cm</p>
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