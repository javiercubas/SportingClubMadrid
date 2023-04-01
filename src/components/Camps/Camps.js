import './Camps.css'

export default function CampsPage() {
    return (
        <div className="box_principal">
            <div className="our_program_title">
                <h3 className="our_program_title_main">SCM CAMPS</h3>
            </div>
            <hr className="our_program_separator" />
            <div className="content_camps">
                <div className='camps_single'>
                    <div className="camps_left">
                        <div className="camps_img" style={{ backgroundImage: 'url(/assets/michigan.jpeg)' }}></div>

                    </div>
                    <div className='camps_info'>
                        <div className="camps_title">
                            <h2>Michigan ID Soccer Camp</h2>
                            <p>We are pleased to announce our first camp in the United States, you will be able to demonstrate your level in front of professional coaches from top clubs such as Celta de Vigo and university coaches.The best player will have the pleasure to enjoy two weeks training with Celta Vigo.</p>
                        </div>
                        <a href="https://buy.stripe.com/aEUdSmgZe7FKg1O289" className='camps_link'><button className="camps_button">ORDER NOW</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}