import { render } from '@testing-library/react';
import React from 'react';
import { App } from '../App';

it('renders app correctly', () => {
  const app = render(<App />);
  expect(app).toMatchSnapshot();
});
