import React from 'react';
import styles from './Convocatoria.module.css'

export default function Convocatoria() {
    return (
        <div className={styles.box}>
            <div className={styles.row1}>
                <img src="https://static.wixstatic.com/media/d78913_5b532f30dd3f4c8999ea776d97203a61~mv2.png/v1/fill/w_244,h_317,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screenshot__125_-removebg-preview.png" className={styles.escudo} />
                <h2 className={styles.title}>Convocatoria Senior B</h2>
                <img src="https://static.wixstatic.com/media/d78913_5b532f30dd3f4c8999ea776d97203a61~mv2.png/v1/fill/w_244,h_317,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screenshot__125_-removebg-preview.png" className={styles.escudo} />
            </div>
            <div className={styles.row2}>
                <div className={styles.positions}>
                    <h3 className={styles.position}>Porteros</h3>
                    <h4 className={styles.players}>Cubas, David</h4>
                </div>
                <div className={styles.positions}>
                    <h3 className={styles.position}>Mediocentros</h3>
                    <h4 className={styles.players}>Danovis, Christian, Alvaro, John</h4>
                </div>
                <div className={styles.positions}>
                    <h3 className={styles.position}>Defensas</h3>
                    <h4 className={styles.players}>Sebas, Johnny, Jafet, Grovert, Anthony</h4>
                </div>
                <div className={styles.positions}>
                    <h3 className={styles.position}>Delanteros</h3>
                    <h4 className={styles.players}>Will, Angel, Santi, Omar</h4>
                </div>
            </div>
            <div className={styles.row3}>
                <div className={styles.bottom}>
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <h3 className={styles.text}>Roman Valero</h3>
                </div>
                <div className={styles.bottom}>
                    <i class="fa fa-calendar" aria-hidden="true"></i>
                    <h3 className={styles.text}>16/11/2022</h3>
                </div>
                <div className={styles.bottom}>
                    <i class="fa fa-clock-o" aria-hidden="true"></i>
                    <h3 className={styles.text}>On field: 10:00<br></br>Starts: 11:00</h3>
                </div>
                <div className={styles.bottom}>
                    <i class="fa fa-male" aria-hidden="true"></i>
                    <h3 className={styles.text}>Shirt: Black<br></br>Shorts: Black<br></br>Socks: Black</h3>
                </div>
            </div>
        </div>
    )
}

