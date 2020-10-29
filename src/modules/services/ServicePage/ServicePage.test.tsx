import { render } from '@testing-library/react';
import React from 'react';
import { ServicePage } from './ServicePage.component';

describe('[Component] ServicePage', () => {
  it('renders correctly', () => {
    const servicePage = render(<ServicePage />);
    expect(servicePage).toMatchSnapshot();
  });
});
