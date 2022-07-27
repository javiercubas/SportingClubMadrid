import './university.css'

export default function University() {

    return (
        <div className="box">
            <div className="section-name">
                <h1 className='text-title'>UNIVERSITY OPTIONS</h1>
                <h3 className='text-info'>Full Bachelors and Masters degrees available in English in Madrid</h3>
            </div>
            <div class="button-radio">
                <a className='info' href="">MORE INFO</a>
                <i class="fa-solid fa-circle-info"></i>
            </div>
            <div class="universities">
                <div className="div">
                    <div className="private">
                        <h2 className="text-subtitle">PUBLIC SPANISH UNIVERSITY</h2>
                    </div>
                    <div className="images-university">
                        <div className="img UAM" />
                        <div className="img UA" />
                        <div className="img UPM" />
                        <div className="img UC3" />
                    </div>
                </div>
                <div className="div">
                    <div className="american">
                        <h2 className="text-subtitle">AMERICAN UNIVERSITY</h2>
                    </div>
                    <div className="images-university" style={{gridTemplateColumns: "repeat(2, 1fr)"}}>
                        <div className="img SaintLouis" />
                        <div className="img suffolk" />
                    </div>
                </div>
                <div className="div">
                    <div className="private">
                        <h2 className="text-subtitle">PRIVATE SPANISH UNIVERSITY</h2>
                    </div>
                    <div className="images-university">
                        <div className="img UEM" />
                        <div className="img CEU" />
                        <div className="img IE" />
                        <div className="img SIU" />
                    </div>
                </div>
            </div>
        </div>
    )
}