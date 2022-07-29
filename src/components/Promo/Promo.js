import React from 'react'
import './Promo.css';
import { useTranslation } from 'react-i18next';

export default function Promo() {
    const [t] = useTranslation("global");
    return (
        <section className="promo" id="landing">
            <div className='bg-promo'/>
            <div className="contenido-promo">
                <h2 className="titulo-promo">are you ready<br/>to
                    <h2 className='titulo2-promo'> change</h2>
                    <h2 className="titulo-promo"> your<br/></h2>
                    <h2 className='titulo2-promo'>life?</h2>
                </h2>
                <button className='button-promo'>Apply Now</button>
            </div>

        </section>
    )
}

