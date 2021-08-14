import React from 'react';
import { render } from '@testing-library/react';
import ContactPerson from './ContactPerson';

test('name shows up', () => {
  const name = 'Test Testson';
  const email = 'test@testson.com';
  const phone = 99988777;
  const contactPerson = render(<ContactPerson name={name} email={email} phone={phone} />);

  const emailElement = contactPerson.getByText(email);
  expect(emailElement).toHaveTextContent(email);
});