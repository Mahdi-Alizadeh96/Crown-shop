import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishibleKey = 'pk_test_51JyDppA2rrtSO51PzLscjyIw2TWagRzd9rTeYq1MiK4Ijgh80B1izflYxukJWItL1XPiaQXbwA8oCjc3bcKVLnhs00Tk6P0IWO';
    const onToken = token => {
        console.log(token);
        alert('Payment Succesful!');
      };

    return (
        <StripeCheckout
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishibleKey}
         />
    )
}

export default StripeCheckoutButton;