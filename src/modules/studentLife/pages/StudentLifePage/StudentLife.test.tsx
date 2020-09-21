import { render } from '@testing-library/react';
import React from 'react';
import { StudentLifePage } from './StudentLifePage.component';

describe('[Component] StudentLifePage', () => {
  it('renders correctly', () => {
    const studentLifePage = render(<StudentLifePage />);
    expect(studentLifePage).toMatchSnapshot();
  });
});
