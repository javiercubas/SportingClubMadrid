import './form.css'
import React, { useState } from 'react';
import Paypal from '../../Paypal/Paypal';

export default function Form() {

    const [isClick, setClick] = useState(false);

    return (
        isClick ?
            <Paypal/>
            :
            <form className='styleForm'>
                <div className="form-group">
                    <label for="name-surname">Name & Surname:</label>
                    <input type="text" id="name-surname" name="name-surname" required />
                </div>

                <div className="form-group">
                    <label for="birthday">Birthday:</label>
                    <input type="date" id="birthday" name="birthday" required />
                </div>

                <div className="form-group">
                    <label for="phone">Phone number:</label>
                    <input type="tel" id="phone" name="phone" required />
                </div>

                <div className="form-group">
                    <label for="email">Mail:</label>
                    <input type="email" id="email" name="email" required />
                </div>

                <div className="form-group">
                    <label for="club">Actual club/academy:</label>
                    <input type="text" id="club" name="club" required />
                </div>

                <div className="form-group">
                    <label for="position">Position:</label>
                    <select name="position" id="position">
                        <option value="goalkeeper">Goalkeeper</option>
                        <option value="defender">Defender</option>
                        <option value="midfielder">Midfielder</option>
                        <option value="forward">Forward</option>
                    </select>
                </div>

                <div className="form-group">
                    <button className="orderButtonStyle" onClick={setClick(true)}>ORDER NOW 210$</button>
                </div>

            </form>
    )
}