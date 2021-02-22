import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import { Simulate } from "react-dom/test-utils";
import App from '../App'

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", async () => {
    render(<CheckoutForm />)

    // const test = screen.getByText(/Checkout Form /i)
    const test = await screen.getByText(/Checkout Form/i)

    expect(test).toBeInTheDocument()
});

test("form shows success message on submit with form details", () => {
    const { getByText, getByTestId } = render(<CheckoutForm />);

    const submitButton = getByText("Checkout")

    Simulate.submit(submitButton)

    getByTestId(/successMessage/i);
});
