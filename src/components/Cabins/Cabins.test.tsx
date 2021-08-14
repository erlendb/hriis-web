import React from 'react';
import { render } from '@testing-library/react';
import Cabins from './Cabins';

test('contains title', () => {
  const cabins = render(<Cabins />);
  const h1 = cabins.getByText('Hytter');
  expect(h1).toHaveTextContent('Hytter');
});