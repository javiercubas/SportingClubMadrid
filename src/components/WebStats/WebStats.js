import React from 'react'
import './WebStats.css';
import { useTranslation } from 'react-i18next';

export default function WebStats() {
    const [t] = useTranslation("global");
    return (
        <section className="webstats">
            <h2 className='title-webstats'>CPA {t("home-webstats.title")}</h2>
            <div className='stats-webstats'>
                <div className='stat-webstats'>
                    <h3 className='number-stat-webstats'>12</h3>
                    <p className='title-stat-webstats'>{t("home-webstats.countrys")}</p>
                </div>
                <div className='stat-webstats'>
                    <h3 className='number-stat-webstats'>3</h3>
                    <p className='title-stat-webstats'>{t("home-webstats.games")}</p>
                </div>
                <div className='stat-webstats'>
                    <h3 className='number-stat-webstats'>500K</h3>
                    <p className='title-stat-webstats'>{t("home-webstats.players")}</p>
                </div>
                <div className='stat-webstats'>
                    <h3 className='number-stat-webstats'>200</h3>
                    <p className='title-stat-webstats'>{t("home-webstats.competitions")}</p>
                </div>
            </div>
        </section>
    )
}

