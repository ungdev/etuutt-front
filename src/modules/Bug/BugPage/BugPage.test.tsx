import { render } from '@testing-library/react';
import React from 'react';
import { BugPage } from './BugPage.component';

describe('[Component] BugPage', () => {
  it('renders correctly', () => {
    const bugPage = render(<BugPage />);
    expect(bugPage).toMatchSnapshot();
  });
});
