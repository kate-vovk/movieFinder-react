import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { FunctionComponent, ReactElement } from 'react';

interface IStripeWrapper {
  children: ReactElement;
}

const stripePromise = loadStripe(`${process.env.STRIPE_PUBLIC_KEY}`);

export const StripeWrapper: FunctionComponent<IStripeWrapper> = ({ children }) => {
  return <Elements stripe={stripePromise}>{children}</Elements>;
};
