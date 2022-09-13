import React, { useEffect, useState } from "react";
import Popup from "../Popup/Popup";
import { useTranslation } from "react-i18next";
import i18next from 'i18next';
import { Link } from "react-router-dom";
import "./HeaderLogo.css";
import Sidebar from "../TopBar/Sidebar";

export function Languages(props) {
  const { country, language } = props;
  return (
    <button className="country-grid-flags" onClick={() => {
      const function1 = i18next.changeLanguage(country)
      const function2 = document.getElementsByClassName('overlay')[0].style.visibility = "hidden"
      const function3 = document.getElementsByClassName('overlay')[0].style.opacity = "0"
    }}>
      <img className="img-country-grid-flags" src={`/assets/${language}.png`} />
      <p className="name-country-grid-flags">{language}</p>
    </button>
  )
}

const HeaderLogo = () => {
  const [visibility, setVisibility] = useState(false);
  const popupCloseHandler = (e) => {
    setVisibility(e);
  };

  let language;
  switch (i18next.language) {
    case "es":
      language = "spanish";
      break;
    case "en":
      language = "english";
      break;
    case "fr":
      language = "french";
      break;
    case "de":
      language = "german";
      break;
    case "it":
      language = "italian";
      break;

  }
  const [t] = useTranslation("global");

  const url = 'https://clever-neumann.82-223-205-248.plesk.page/api/menu-elements'
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
      <div className='header-container'>
        <div className='bg-header-container' />
        <div className='main-header-container'>
          <Link to="/" className='content-header-container'>
            <img className='logo-header' src='https://static.wixstatic.com/media/d78913_5b532f30dd3f4c8999ea776d97203a61~mv2.png/v1/fill/w_244,h_317,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screenshot__125_-removebg-preview.png' />
            <h1 className='title-header'>SPORTING CLUB MADRID</h1>
          </Link>
          <div className='social-media-header'>
            <a href="https://www.instagram.com/sportingclubmadrid/" className='social-media'>
              <i style={{ fontSize: "xx-large", color: "#a09600" }} className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://mobile.twitter.com/scmadrid2021" className='social-media'>
              <i style={{ fontSize: "xx-large", color: "#a09600" }} className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://es.linkedin.com/company/sporting-club-madrid" className='social-media'>
              <i style={{ fontSize: "xx-large", color: "#a09600" }} className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="menu-header">
          <nav className="main-menu">
            <ul className="content-menu-header">
              {!todos ? 'Cargando...' :
                todos.map((element, index) => {
                  let url = element.attributes.Name.toLowerCase().replace(" ", "-")
                  if (url == "home") {
                    url = ""
                  }
                  return (
                    <Link to={url} className="elements-menu-header">{element.attributes.Name}</Link>
                  )
                })}
            </ul>
          </nav>
        </div>
        <Sidebar />
      </div>
    </>
  )
}

export default HeaderLogo