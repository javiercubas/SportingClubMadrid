import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TopMenu } from "./TopBar";
import { useTranslation } from "react-i18next";



export default function Sidebar(props) {
    const { user, name } = props;
    const [isOpen, setIsopen] = useState(false);

    const Sidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }
    const[t] = useTranslation("global");
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
                        <TopMenu option="2" name={name} user={user} />
                        <li><Link to='/' exact>{t("main-menu.home")}</Link></li>
                        <li><Link to='/teams' exact>{t("main-menu.teams")}</Link></li>
                        <li><Link to='/national-teams' exact>{t("main-menu.national-teams")}</Link></li>
                        <li><Link to='/leagues' exact>{t("main-menu.leagues")}</Link></li>
                        <li><Link to='/tournaments' exact>{t("main-menu.tournaments")}</Link></li>
                        <li><Link to='/blitz-tournaments' exact>{t("main-menu.blitz-tournaments")}</Link></li>
                        <li><Link to='/friendly-matches' exact>{t("main-menu.friendly-matches")}</Link></li>
                        <li><Link to='/contact' exact>{t("main-menu.contact")}</Link></li>
                    </ul>
                </div>
            </div>
            <div className={`sidebar-overlay ${isOpen == true ? 'active' : ''}`} onClick={Sidebar}></div>


        </>
    )
}