import './PayPalForm.css';
import React from 'react';
import Form from './components/form';

export default function PayPalForm() {

    return (
        <div class="body">
            <div className="formBox">
                <div className="header">
                    <h1 className='formH1'>SCMCamps - Payment section</h1>
                </div>
                <div className="bodyContainer">
                   <Form/>
                    <div className="imgForm"></div>
                </div>
                {/* <div className="orderButton">
                    <button className="orderButtonStyle">ORDER NOW 210$</button>
                </div> */}
            </div>
        </div>

    );
}
