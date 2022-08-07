import './ourProgram.css'
import Img_OP from './element/img'
import { useEffect, useState } from 'react'

export default function OurProgramPage() {
    const url = 'http://127.0.0.1:1337/api/our-programs/1?populate=%2A'
    const [todos, setTodos] = useState()
    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJSON = await response.json()
        setTodos(responseJSON.data.attributes.Photos.data)
        console.log(responseJSON.data.attributes.Photos.data)
    }

    useEffect(() => {
        fetchApi()
    }, [])
    return (
        <div className="box_principal">
            <div className="our_program_title">
                <h3 className="our_program_title_main">Our Program</h3>
            </div>
            <hr className="our_program_separator" />
            <div className="content_our_program">
            {!todos ? 'Cargando...' :
                    todos.map((img, index) => {
                        return <Img_OP img_url={img.attributes.url} />
                    })}
            </div>
        </div>
    )
}