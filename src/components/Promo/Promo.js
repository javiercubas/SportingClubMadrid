import React from 'react'
import './Promo.css';
import { useTranslation } from 'react-i18next';

export default function Promo() {
    const [t] = useTranslation("global");
    return (
        <section className="promo" id="landing">
            <img src="./assets/foto1.jpg" className='bg-promo'/>
            <div className="contenido-promo">
                <h2 className="titulo-promo">SPORTING CLUB MADRID
                    <h2 className='titulo2-promo'>{t("home-promo.title2")}.</h2>
                </h2>
                <div className="botones">
                    <a href="https://apps.apple.com/us/app/festo-app/id1555730816">
                        <img style={{ height: "70px" }} src="https://static.festea.party/web/app-store-badge-es.svg" alt="Apple AppStore Badge" />
                    </a>

                    <a href="https://play.google.com/store/apps/details?id=com.negativeepsilon.festo">
                        <img style={{ height: "70px" }} src="https://static.festea.party/web/google-play-badge-es.png.webp" alt="Google Play Store Badge" />
                    </a>
                </div>
            </div>

        </section>
    )
}

