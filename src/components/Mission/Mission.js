import './Mission.css';
import foto1 from './assets/mission1.jpg'
import foto2 from './assets/mission2.jpg'
import foto3 from './assets/mission3.jpg'

 
export default function Mission(){
    return (
        <div className="mission">
            <div className="mission__title">
                <h3 id="mission__title--main">Our Mission</h3>
            </div>
            <hr className="mission__separator"/>
            <div className="mission__grid">
                <div className="mission__grid__card">
                    <h4 className="mission__grid__card--title">Who we are?</h4>
                    <p className="mission__grid__card--p">We are coaches and teachers, players and students. We are passionate about Futbol, life and the future. </p>
                    <br/>
                    <div  className='mission__grid__card--imgContainer'>
                        <img src={foto1} alt="Imagen campo fútbol" className='mission__grid__card__imgContainer--img'/>
                    </div>
                    
                </div>
                <div className="mission__grid__card">
                    <h4 className="mission__grid__card--title">What we do?</h4>
                    <p className="mission__grid__card--p">Play and train full-time from August to June, every year. No limits and regulations of how much time we are allowed on the pitch.</p>
                    <div  className='mission__grid__card--imgContainer'>
                        <img src={foto2} alt="Imagen campo fútbol" className='mission__grid__card__imgContainer--img'/>
                    </div>
                </div>
                <div className="mission__grid__card">
                    <h4 className="mission__grid__card--title">Why it matters?</h4>
                    <p className="mission__grid__card--p">Players outside of Europe need a platform to enter the market and grow their level of play and demonstrate their capabilities. </p>
                    <div  className='mission__grid__card--imgContainer'>
                        <img src={foto3} alt="Imagen campo fútbol" className='mission__grid__card__imgContainer--img'/>
                    </div>
                </div>
            </div>
            <br />

        </div>
    )
};