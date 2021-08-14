import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

test('header contains title', () => {
  const header = render(<Header />);
  const h1 = header.getByText('Holmenkollen-Riis speidergruppe');
  expect(h1).toHaveTextContent('Holmenkollen-Riis speidergruppe');
});