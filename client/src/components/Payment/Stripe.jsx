import { Route } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import Return from "./Return";

const Stripe = () => {
  return (
    <>
      <Route path="/checkout" component={CheckoutForm} />
      <Route path="/return" component={Return} />
    </>
  );
};

export default Stripe;
