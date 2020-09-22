import { render } from '@testing-library/react';
import React from 'react';
import { EventPage } from './EventPage.component';

describe('[Component] EventPage', () => {
  it('renders correctly', () => {
    const eventPage = render(<EventPage />);
    expect(eventPage).toMatchSnapshot();
  });
});
