import { render } from '@testing-library/react';
import React from 'react';
import { TimetablePage } from './TimetablePage.component';

describe('[Component] TimetablePage', () => {
  it('renders correctly', () => {
    const timetablePage = render(<TimetablePage />);
    expect(timetablePage).toMatchSnapshot();
  });
});
