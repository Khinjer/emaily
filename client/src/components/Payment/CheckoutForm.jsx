import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";

import Loader from "../Loader";
import { Paper } from "@mui/material";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

export default function CheckoutForm() {
  const [clientSecret, setClientSecret] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Create a Checkout Session as soon as the page loads
    fetch("/stripe/create-checkout-session", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .then(() => setLoading(false));
  }, []);

  return (
    <>
      <Loader visible={loading} />
      <Paper id="checkout" sx={{ borderRadius: 5 }} elevation={6}>
        {clientSecret && (
          <EmbeddedCheckoutProvider
            stripe={stripePromise}
            options={{ clientSecret }}
          >
            <EmbeddedCheckout id="checkoutForm" />
          </EmbeddedCheckoutProvider>
        )}
      </Paper>
    </>
  );
}
