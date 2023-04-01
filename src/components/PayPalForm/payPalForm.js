import './PayPalForm.css';
import React, {useState} from 'react';
import Form from './components/form';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

export default function PayPalForm() {

    // Make sure to call `loadStripe` outside of a component's render to avoid
    // recreating the `Stripe` object on every render.
    const [stripePromise, setStripePromise] = useState(() => loadStripe('pk_live_51MrIUuFId9gJV8gDH1ZuBiMv4Av72Mt7bb7cjmQxOxMcB8WkE3Mvh6lccTX9hRuOh9tSR7SsHEfkJ9NPsamqKg4a00WqQilFJr'));


    return (
        <div class="body">
            <div className="formBox">
                <div className="header">
                    <h1 className='formH1'>SCMCamps - Payment section</h1>
                </div>
                <Elements stripe={stripePromise}>
                    <div className="bodyContainer">
                        <Form />
                        <div className="imgForm"></div>
                    </div>
                </Elements>
                {/* <div className="orderButton">
                    <button className="orderButtonStyle">ORDER NOW 210$</button>
                </div> */}
            </div>
        </div>

    );
}
