import { render } from '@testing-library/react';
import React from 'react';
import { HomePage } from './HomePage.component';

describe('[Component] HomePage', () => {
  it('renders correctly', () => {
    const homePage = render(<HomePage />);
    expect(homePage).toMatchSnapshot();
  });
});
