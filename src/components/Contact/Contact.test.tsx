import React from "react";
import { render, screen } from '@testing-library/react';
import Contact from './Contact';

test("contains Reidar's email address", () => {
  const contact = render(<Contact />);
  const email = 'reidar@rvp.no';
  const emailElement = contact.getByText(email);
  expect(emailElement).toHaveTextContent(email);
});