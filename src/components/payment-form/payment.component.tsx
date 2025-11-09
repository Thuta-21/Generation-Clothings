import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { BUTTON_TYPE_CLASSES } from "../Botton/button.compoent";
import { PaymentFormContainer, FormContainer, PaymentButton } from "./payment.style";
import { useState, FormEvent } from "react";
import { useSelector } from "react-redux";
import { user } from "../../store/user/user.selector";
import { selectCartTotal } from "../../store/cart/cart.selector";
import { StripeCardElement } from "@stripe/stripe-js";

const ifValidElement = (card: StripeCardElement | null): card is StripeCardElement => card !== null;

const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const CurrentUser = useSelector(user);
  const [isProcessPayment, setisProcessPayment] = useState(false);

  const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements || !amount) {
      return;
    }

    if (!CurrentUser) {
      return alert('Please Sign in to order.');
    }

    setisProcessPayment(true);
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100}),
    }).then((res) => res.json());

    const cardDetails = elements.getElement(CardElement);
    if(!ifValidElement(cardDetails)) return;

    const {paymentIntent: {client_secret}} = response;
    const paymentReslut = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: cardDetails,
        billing_details: {
          name: CurrentUser ? CurrentUser.displayName: 'Guest',
        }
      }
    });

    setisProcessPayment(false);

    if (paymentReslut.error) {
      alert('Something went wrong!')
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
