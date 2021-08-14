import React from 'react';
import { render } from '@testing-library/react';
import About from './About';

test('contains title', () => {
  const about = render(<About />);
  const h1 = about.getByText('Om speidergruppa');
  expect(h1).toHaveTextContent('Om speidergruppa');
});