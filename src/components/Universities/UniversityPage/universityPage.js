import { useState, useEffect } from 'react'
import './universityPage.css'

export default function UniversityPage() {
    const url = 'https://clever-neumann.82-223-205-248.plesk.page/api/university-types?populate[universities][populate][0]=Logo'
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
        <div className="principal_box">
            <div className="univerity_title">
                <h3 className="university_title-main">Universities Options</h3>
            </div>
            <hr className="university_separator" />
            <div className="content_universities_main">
                {!todos ? 'Cargando...' :
                    todos.map((university_type, index) => {
                        const university = university_type.attributes.universities.data.map(university => {
                            return (
                                <a className="info_uni_link" href={university.attributes.Web}>
                                    <div className="uni-img">
                                        <img className="img1" src={"https://clever-neumann.82-223-205-248.plesk.page" + university.attributes.Logo.data.attributes.url} />
                                    </div>
                                    <p className='uni_link'>{university.attributes.Name}</p>
                                </a>
                            )
                        })
                        return (
                            <div className="public_universities grid_universities">
                                <div className="content">
                                    <h2 className='title_main'>{university_type.attributes.Type} UNIVERSITIES</h2>
                                    <h3 className='subtitle_main'>{university_type.attributes.Description}</h3>
                                </div>
                                <div className='uni_publ'>
                                    {university}
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div >
    )
}