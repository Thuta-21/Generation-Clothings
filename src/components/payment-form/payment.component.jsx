import { CardElement } from "@stripe/react-stripe-js";
import Button, { BUTTON_TYPE_CLASSES } from "../Botton/button.compoent";
import { PaymentFormContainer, FormContainer, PaymentButton } from "./payment.style";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useSelector } from "react-redux";
import { user } from "../../store/user/user.selector";
import { selectCartTotal } from "../../store/cart/cart.selector";
const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const CurrentUser = useSelector(user);
  const [isProcessPayment, setisProcessPayment] = useState(false);
  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    setisProcessPayment(true);
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100}),
    }).then((res) => res.json());

    const {paymentIntent: {client_secret}} = response;
    console.log('user', CurrentUser)
    const paymentReslut = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: CurrentUser ? CurrentUser.displayName: 'Guest',
        }
      }
    });

    setisProcessPayment(false);

    if (paymentReslut.error) {
      alert('error', paymentReslut.error)
      console.log(paymentReslut.error)
    } else {
      if (paymentReslut.paymentIntent.status === 'succeeded') {
        alert('Payment Successful');
      }
    }
  };


  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <br/>
        <PaymentButton isLoading={isProcessPayment} buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay Now</PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default Payment;
