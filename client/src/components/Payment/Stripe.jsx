import { Route } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import Return from "./Return";

const Stripe = () => {
  return (
    <div>
        <Route path="/checkout"> <CheckoutForm /> </Route>
        <Route path="/return" > <Return /> </Route>
    </div>
  )
}

export default Stripe;