import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HIHUUKwhRTUR8vf77HoZ52jfLbpnsTTwsEXQ3kdSBIL10KmASjTPHuB65gQLPBfSEKn4zlPjv07z6yan08xQw2P00TMIsHJ3N";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Athena Clothing'
      billingAddress
      shippingAddress
      image='https://png.pngtree.com/template/20191017/ourmid/pngtree-spartan-athena-greek-goddess-from-ancient-mythology-female-character-image_320478.jpg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
