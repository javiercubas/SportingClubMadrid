import './Mission.css';


 
export default function Mission(){
    return [
        <div>
            <div class="mission__title">
                <h3 id="mission__title--main">Our Mission</h3>
            </div>
            <hr class="mission__separator"/>
            <div class="mission__grid">
                <div class="mission__grid__card">
                    <h4 className="mission__grid__card--title">Who we are</h4>
                    <p className="mission__grid__card--p">We are coaches and teachers, players and students. We are passionate about Futbol, life and the future. </p>
                </div>
                <div class="mission__grid__card">
                    <h4 className="mission__grid__card--title">What we do.</h4>
                    <p className="mission__grid__card--p">Play and train full-time from August to June, every year. No limits and regulations of how much time we are allowed on the pitch.</p>
                </div>
                <div class="mission__grid__card">
                    <h4 className="mission__grid__card--title">Why it matters.</h4>
                    <p className="mission__grid__card--p">Players outside of Europe need a platform to enter the market and grow their level of play and demonstrate their capabilities. </p>
                </div>
            </div>
            <br />

        </div>
    ];
};