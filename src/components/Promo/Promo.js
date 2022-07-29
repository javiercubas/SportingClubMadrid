import React from 'react'
import './Promo.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

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
                <Link to="/contact" exact className='button-promo'>Apply Now</Link>
            </div>

        </section>
    )
}

