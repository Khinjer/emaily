import { Route } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import Return from "./Return";

const Stripe = () => {
  return (
    <div>
      <Route path="/checkout" component={CheckoutForm} />
      <Route path="/return" component={Return} />
    </div>
  );
};

export default Stripe;
