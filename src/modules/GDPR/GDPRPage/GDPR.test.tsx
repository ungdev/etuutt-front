import { render } from '@testing-library/react';
import React from 'react';
import { GDPRPage } from './GDPR.component';

describe('[Component] GrpdPage', () => {
  it('renders correctly', () => {
    const gdprPage = render(<GDPRPage />);
    expect(gdprPage).toMatchSnapshot();
  });
});
