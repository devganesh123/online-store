import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import CircularProgress from "@mui/material/CircularProgress";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import "./checkout.css";
import { commerce } from "../../lib/commerce";
import AddressForm from "../AddressForm/AddressForm";
import PaymentForm from "../PaymentForm/PaymentForm";

const steps = ["Address", "Payment"];

const Checkout = ({ cart }) => {
  const [activeStep, setActiveStep] = useState(0);

  const generateTokenId = async () => {
    const response = await commerce.checkout.generateToken(cart.id, {
      type: "cart",
    });
    console.log(response);
  };

  //   const Form = () => (activeStep === 0 ? <AddressForm /> : <PaymentForm />);
  const Form = () => (activeStep === 0 ? <AddressForm /> : <PaymentForm />);

  const Confirmation = () => <div>Confirmation</div>;

  useEffect(() => {
    generateTokenId();
  }, [cart]);

  return (
    <div className="checkout-section">
      <div className="container">
        <Typography variant="h5">Checkout</Typography>
        <div className="checkout-stepper">
          <Stepper activeStep={activeStep}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : <Form />}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
