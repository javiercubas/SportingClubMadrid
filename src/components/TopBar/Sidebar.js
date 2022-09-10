import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";



export default function Sidebar() {
    const [isOpen, setIsopen] = useState(false);

    const Sidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }
    const [t] = useTranslation("global");

    const url = 'http://127.0.0.1:1337/api/menu-elements'
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
            <div className="btn btn-primary" onClick={Sidebar} >
                <i className="fa fa-bars"></i>
            </div>
            <div className={`sidebar ${isOpen == true ? 'active' : ''}`}>
                <div className="sd-header">
                    <h4 className="mb-0">MENU PRINCIPAL</h4>
                    <div className="btn btn-primary" onClick={Sidebar}><i className="fa fa-times"></i></div>
                </div>
                <div className="sd-body">
                    <ul>
                        {!todos ? 'Cargando...' :
                            todos.map((element, index) => {
                                let url = element.attributes.Name.toLowerCase().replace(" ", "-")
                                if (url == "home") {
                                    url = ""
                                }
                                return (
                                    <li><Link to={url} onClick={Sidebar}>{element.attributes.Name}</Link></li>
                                )
                            })}
                    </ul>
                </div>
            </div>
            <div className={`sidebar-overlay ${isOpen == true ? 'active' : ''}`} onClick={Sidebar}></div>


        </>
    )
}