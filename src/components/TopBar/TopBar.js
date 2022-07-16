import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import "./TopBar.css";
import { auth, db, logout } from "../../Firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import Sidebar from "./Sidebar";
import Popup from "../Popup/Popup";
import { useTranslation } from "react-i18next";
import i18next from 'i18next';
import { elementor } from "fontawesome";

export function Languages(props) {
    const { country, language } = props;
    return (
        <button className="country-grid-flags" onClick={() => {
            const function1 = i18next.changeLanguage(country)
            const function2 = document.getElementsByClassName('overlay')[0].style.visibility = "hidden"
            const function3 =  document.getElementsByClassName('overlay')[0].style.opacity = "0"
        }}>
            <img className="img-country-grid-flags" src={`/assets/${language}.png`} />
            <p className="name-country-grid-flags">{language}</p>
        </button>
    )
}
export function TopMenu(props) {
    const { option, name, user } = props;
    let TopMenu;
    const [t] = useTranslation("global");
    if (option == 1) {
        if (!user) {
            TopMenu = <Link to="/login/" className="login-account-menu-top-bar">{t("top-menu.register")}</Link>;
        }
        else {
            TopMenu = <nav className="top-menu-top-bar">
                <ul className="list-top-menu-top-bar">
                    <li className="links-top-menu-top-bar">
                        <Link to="/dashboard/" className="logged-account-menu-top-bar">{t("top-menu.personal-area")}</Link>
                    </li>
                    <li className="links-top-menu-top-bar">
                        <Link to="/dashboard/" className="logged-account-menu-top-bar">{t("top-menu.your-teams")}</Link>
                    </li>
                    <li className="links-top-menu-top-bar">
                        <Link to="/dashboard/" className="logged-account-menu-top-bar">{t("top-menu.your-matches")}</Link>
                    </li>
                    <li className="links-top-menu-top-bar">
                        <Link to="/dashboard/" className="logged-account-menu-top-bar">{t("top-menu.your-competitions")}</Link>
                    </li>
                    <li className="links-top-menu-top-bar">
                        <Link to="/stats/" className="logged-account-menu-top-bar">{t("top-menu.your-stats")}</Link>
                    </li>
                    <li className="links-top-menu-top-bar">
                        <Link to="/profile/" className="logged-account-menu-top-bar">{t("top-menu.hi")}, {name}<img src={user.photoURL} className="image-account-menu-top-bar" /></Link>
                    </li>
                </ul>
            </nav>;
        }
    }
    else {
        if (!user) {
            TopMenu = <li><Link to="/login">{t("top-menu.register")}</Link></li>;
        }
        else {
            TopMenu = <>
                <li><Link to='/profile'>{t("top-menu.hi")}, {name}<img src={user.photoURL} className="image-account-menu-top-bar" /></Link></li>
                <li><Link to='/dashboard'>{t("top-menu.personal-area")}</Link></li>
                <li><Link to='/dashboard'>{t("top-menu.your-teams")}</Link></li>
                <li><Link to='/dashboard'>{t("top-menu.your-matches")}</Link> </li>
                <li><Link to='/dashboard'>{t("top-menu.your-competitions")}</Link></li>
                <li><Link to='/estadisticas'>{t("top-menu.your-stats")}</Link></li>
            </>;
        }

    }
    return TopMenu;
}

export default function TopBar() {
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

    function isInViewport(elem) {
        var distance = elem.getBoundingClientRect();
        return (
          distance.top < (window.innerHeight || document.documentElement.clientHeight) && distance.bottom > 0
        );
      }
      var elem = document.getElementsByClassName('header-container')[0];
      window.addEventListener("scroll", function () {
        if (isInViewport(elem)){
            document.getElementsByClassName("top-bar")[0].style.height=0;
            document.getElementsByClassName("country-logo-top-bar")[0].style.height='0';
        } 
        else {
            document.getElementsByClassName("top-bar")[0].style.height="18vh";
            document.getElementsByClassName("country-logo-top-bar")[0].style.height='50px';
        }
      });
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

            <div className="top-bar">
                <Link to="/" exact className="logo-top-bar">
                    <button className="country-logo-top-bar" style={{ backgroundImage: `url(/assets/${language}.png)` }} onClick={(e) => setVisibility(!visibility)} />
                </Link>
                <div className="menus-top-bar">
                    <div className="account-menu-top-bar">
                        <TopMenu option="1" name={name} user={user} />
                    </div>
                    <nav className="main-menu-top-bar">
                        <ul className="list-main-menu-top-bar">
                            <li className="links-main-menu-top-bar"><Link to="/" exact className="object-main-menu-top-bar">{t("main-menu.home")}</Link></li>
                            <li className="links-main-menu-top-bar"><Link to="/teams/" exact className="object-main-menu-top-bar">{t("main-menu.teams")}</Link></li>
                            <li className="links-main-menu-top-bar"><Link to="/national-teams/" exact className="object-main-menu-top-bar">{t("main-menu.national-teams")}</Link></li>
                            <li className="links-main-menu-top-bar"><Link to="/leagues/" exact className="object-main-menu-top-bar">{t("main-menu.leagues")}</Link></li>
                            <li className="links-main-menu-top-bar"><Link to="tournaments/" exact className="object-main-menu-top-bar">{t("main-menu.tournaments")}</Link></li>
                            <li className="links-main-menu-top-bar"><Link to="/blitz-tournaments/" exact className="object-main-menu-top-bar">{t("main-menu.blitz-tournaments")}</Link></li>
                            <li className="links-main-menu-top-bar"><Link to="/friendly-matches/" exact className="object-main-menu-top-bar">{t("main-menu.friendly-matches")}</Link></li>
                            <li className="links-main-menu-top-bar"><Link to="/contact/" exact className="object-main-menu-top-bar">{t("main-menu.contact")}</Link></li>
                        </ul>
                    </nav>
                </div>
                <Sidebar user={user} name={name} />
            </div>
        </>
    );
}
