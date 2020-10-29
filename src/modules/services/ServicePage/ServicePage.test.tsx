import { render } from '@testing-library/react';
import React from 'react';
import { ServicePage } from './ServicePage.component';

describe('[Component] HomePage', () => {
  it('renders correctly', () => {
    const homePage = render(<ServicePage />);
    expect(homePage).toMatchSnapshot();
  });
});
