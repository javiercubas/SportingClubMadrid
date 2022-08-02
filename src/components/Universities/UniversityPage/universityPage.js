import './universityPage.css'

export default function UniversityPage() {
    return (
        <div className="principal_box">
            <div className="univerity_title">
                <h3 className="university_title-main">Universities Options</h3>
            </div>
            <hr className="university_separator" />
            <div className="content_universities_main">
                <div className="public_universities grid_universities">
                    <div className="content">
                        <h2 className='title_main'>PUBLIC UNIVERSITIES</h2>
                        <h3 className='subtitle_main'>That offer degrees in English</h3>
                    </div>
                    <div className="uni_publ">
                        <div className="info_uni_link">
                            <div className="img1 UA"></div>
                            <a className='uni_link' href="https://www.uah.es/en">UNIVERSIDAD DE ALCALÁ</a>
                        </div>
                        <div className="info_uni_link">
                            <div className="img1 IF"></div>
                            <a className='uni_link' href="https://institutofranklin.net/en">INSTITUTO FRANKLIN</a>
                        </div>
                        <div className="info_uni_link">
                            <div className="img1 UCM"></div>
                            <a className='uni_link' href="https://www.ucm.es/english">UNIVERSIDAD COMPLUTENSE</a>
                        </div>
                        <div className="info_uni_link">
                            <div className="img1 UAM"></div>
                            <a className='uni_link' href="https://www.uam.es/uam/inicio">UNIVERSIDAD AUTÓNOMA</a>
                        </div>
                        <div className="info_uni_link">
                            <div className="img1 UPM"></div>
                            <a className='uni_link' href="http://www.upm.es/internacional">UNIVERSIDAD POLITÉCNICA</a>
                        </div>
                        <div className="info_uni_link">
                            <div className="img1 UC3"></div>
                            <a className='uni_link' href="https://www.uc3m.es/home">UNIVERSIDAD CARLOS III</a>
                        </div>
                    </div>
                </div>
                <div className="american_universities grid_universities">
                    <div className="content">
                        <h2 className='title_main'>AMERICAN UNIVERSITIES</h2>
                        <h3 className='subtitle_main'>With campuses in Madrid</h3>
                    </div>
                    <div className="uni_EEUU">
                        <div className="info_uni_link">
                            <div className="img1 SaintLouis"></div>
                            <a className='uni_link' href="https://www.uc3m.es/home">St. Louis University</a>
                        </div>
                        <div className="info_uni_link">
                            <div className="img1 suffolk"></div>
                            <a className='uni_link' href="https://www.uc3m.es/home">Suffolk University</a>
                        </div>
                    </div>
                </div>
                <div className="private_universities grid_universities">
                    <div className="content">
                        <h2 className='title_main'>PRIVATE UNIVERSITIES</h2>
                        <h3 className='subtitle_main'>With degrees in English</h3>
                    </div>
                    <div className="uni_privates">
                        <div className="info_uni_link">
                            <div className="img1 UEM"></div>
                            <a className='uni_link' href="https://www.uc3m.es/home">St. Louis University</a>
                        </div>
                        <div className="info_uni_link">
                            <div className="img1 CEU"></div>
                            <a className='uni_link' href="https://www.uc3m.es/home">Suffolk University</a>
                        </div>
                        <div className="info_uni_link">
                            <div className="img1 UEM"></div>
                            <a className='uni_link' href="https://www.uc3m.es/home">St. Louis University</a>
                        </div>
                        <div className="info_uni_link">
                            <div className="img1 CEU"></div>
                            <a className='uni_link' href="https://www.uc3m.es/home">Suffolk University</a>
                        </div>
                        <div className="info_uni_link">
                            <div className="img1 UEM"></div>
                            <a className='uni_link' href="https://www.uc3m.es/home">St. Louis University</a>
                        </div>
                        <div className="info_uni_link">
                            <div className="img1 CEU"></div>
                            <a className='uni_link' href="https://www.uc3m.es/home">Suffolk University</a>
                        </div>
                        <div className="info_uni_link">
                            <div className="img1 UEM"></div>
                            <a className='uni_link' href="https://www.uc3m.es/home">St. Louis University</a>
                        </div>
                        <div className="info_uni_link">
                            <div className="img1 CEU"></div>
                            <a className='uni_link' href="https://www.uc3m.es/home">Suffolk University</a>
                        </div>
                        <div className="info_uni_link">
                            <div className="img1 CEU"></div>
                            <a className='uni_link' href="https://www.uc3m.es/home">Suffolk University</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}