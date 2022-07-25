import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../Firebase";
import { query, collection, getDocs, where, connectFirestoreEmulator } from "firebase/firestore";
import Popup from "../Popup/Popup";
import { useTranslation } from "react-i18next";
import i18next from 'i18next';
import { Link } from "react-router-dom";
import "./HeaderLogo.css";

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
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();

      setName(data.psn);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return;
    fetchUserName();
  }, [user, loading]);
  
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
  return (
    <>
      <Popup
        onClose={popupCloseHandler}
        show={visibility}
        title="SELECT LANGUAGE"
      >
        <div className="grid-flags">
          <Languages country="en" language="english" />
          <Languages country="es" language="spanish" />
          <Languages country="fr" language="french" />
          <Languages country="de" language="german" />
          <Languages country="it" language="italian" />
        </div>
      </Popup>
      <div className='header-container'>
        <div className='bg-header-container' />
        <div className='main-header-container'>
          <button className="country-logo-header" style={{ backgroundImage: `url(/assets/${language}.png)` }} onClick={(e) => setVisibility(!visibility)} />
          <Link to="#" className='content-header-container'>
            <img className='logo-header' src='https://static.wixstatic.com/media/d78913_5b532f30dd3f4c8999ea776d97203a61~mv2.png/v1/fill/w_244,h_317,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screenshot__125_-removebg-preview.png' />
            <h1 className='title-header'>SPORTING CLUB MADRID</h1>
          </Link>
          <div className='social-media-header'>
            <Link to="#" className='social-media'>
              <i style={{ fontSize: "xx-large", color: "#a09600" }} class="fa-brands fa-instagram"></i>
            </Link>
            <Link to="#" className='social-media'>
              <i style={{ fontSize: "xx-large", color: "#a09600" }} class="fa-brands fa-twitter"></i>
            </Link>
            <Link to="#" className='social-media'>
              <i style={{ fontSize: "xx-large", color: "#a09600" }} class="fa-brands fa-linkedin"></i>
            </Link>
          </div>
        </div>
        <div className="menu-header">
          <nav className="main-menu">
            <ul className="content-menu-header">
              <Link to="/" className="elements-menu-header">Home</Link>
              <Link to="/mission" className="elements-menu-header">Mission</Link>
              <Link to="/our-program" className="elements-menu-header">Our Program</Link>
              <Link to="/club-staff" className="elements-menu-header">Club Staff</Link>
              <Link to="/women" className="elements-menu-header">Women</Link>
              <Link to="/men" className="elements-menu-header">Men</Link>
              <Link to="/universities" className="elements-menu-header">Universities</Link>
              <Link to="/contact" className="elements-menu-header">Contact</Link>
              <Link to="/blog" className="elements-menu-header">Blog</Link>
            </ul>
          </nav>
          <i className="fas fa-search"></i>
        </div>
      </div>
    </>
  )
}

export default HeaderLogo