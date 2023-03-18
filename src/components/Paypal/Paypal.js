import React from 'react'
import ReactDOM from 'react-dom'

const Paypal = () => {


    const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: "210",
                        currency: 'USD'
                    },
                },
            ],
        });
    };

    const onApprove = (data, actions) => {
        return actions.order.capture();
    };

    return (
        <PayPalButton>
            createOrder={(data, actions) => createOrder(data, actions)}
            onApprove={(data, actions) => onApprove(data, actions)}
        </PayPalButton>
    )
}

export default Paypal